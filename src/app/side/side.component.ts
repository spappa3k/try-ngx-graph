import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Work } from '../../models/models';
import { GrService } from '../gr.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  counterWorks = 0;
  isModalOpen = false; // Stato del modale
  isModalOpenEdit = false;
  indexToEdit?:number
  // Lavori esistenti
  works: Work[] = [];

@Output()
openGraph: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Form di gestione del lavoro
  workForm: FormGroup;

  constructor(private fb: FormBuilder, private gr:GrService) {
    // Inizializza il form
    this.workForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      nodes: this.fb.array([this.createNode()])
    });
  }

  // Getter per il FormArray dei nodi
  get nodes(): FormArray {
    return this.workForm.get('nodes') as FormArray;
  }

  // Metodo per accedere a un nodo come FormGroup
  getNodeAt(index: number): FormGroup {
    return this.nodes.at(index) as FormGroup;
  }

  // Metodo per creare un nodo
  createNode(): FormGroup {
    return this.fb.group({
      value: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  // Apri il modale per creare un nuovo lavoro
  openModal() {
    this.isModalOpen = true;
    this.workForm.reset();
    this.nodes.clear();
    this.nodes.push(this.createNode());
  }

  // Apri il modale per modificare un lavoro
  openModalEdit(index: number) {
    this.openGraph.emit(false);
    this.indexToEdit=index; // usato poi per salvare dopo
    this.isModalOpenEdit = true;
    const workToEdit = this.works[index];
    this.workForm.patchValue({
      name: workToEdit.name,
      description: workToEdit.description
    });

    // Pulisci il FormArray e aggiungi i nodi del lavoro da modificare
    const arrayNodi = this.workForm.get('nodes') as FormArray;
    arrayNodi.clear();
    workToEdit.nodes.forEach(node => {
      arrayNodi.push(this.fb.group({
        value: [node, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
      }));
    });
  }

  // Chiudi il modale per creare un nuovo lavoro
  closeModal() {
    this.isModalOpen = false;
    this.isModalOpenEdit = false;
    this.workForm.reset();
  }

  // Chiudi il modale per modificare un lavoro
  closeModalEdit() {
    this.isModalOpenEdit = false;
    this.workForm.reset();
  }

  // Aggiungi un nuovo nodo
  addNode() {
    if (this.nodes.length < 8) {
      this.nodes.push(this.createNode());
    } else {
      alert('Puoi aggiungere al massimo 8 nodi.');
    }
  }

  removeLastNode() {
    if (this.nodes.length > 1) {
      this.nodes.removeAt(this.nodes.length - 1);
    }
  }

  // Salva il lavoro
  saveWork() {
    const work: Work = {
      name: this.workForm.value.name,
      description: this.workForm.value.description,
      nodes: this.workForm.value.nodes.map((node: any) => node.value)
    };
    this.works.push(work); 
    this.gr.$workToShow = this.works[this.works.length - 1];
    this.openGraph.emit(true);
    console.log('Lavoro salvato:', this.works);

    // Chiudi il modale
    this.closeModal();
  }

    // Salva il lavoro editato
    saveWorkEdited() {
      const work: Work = {
        name: this.workForm.value.name,
        description: this.workForm.value.description,
        nodes: this.workForm.value.nodes.map((node: any) => node.value)
      };
      this.works[this.indexToEdit!] = work;
      this.gr.$workToShow=work;
      this.openGraph.emit(true);
      this.closeModal();
    }

  // Elimina un lavoro
  delete(i: number) {
    this.works.splice(i, 1);
  }


  
}
