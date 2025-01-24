import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Work } from '../../models/models';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  counterWorks = 0;
  isModalOpen = false; // Stato del modale

  // Lavori esistenti
  works: Work[] = [];

  // Form di gestione del lavoro
  workForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  // Apri il modale
  openModal() {
    this.isModalOpen = true;
    // Resetta il form
    this.workForm.reset();
    this.nodes.clear();
    this.nodes.push(this.createNode());
  }

  // Chiudi il modale
  closeModal() {
    this.isModalOpen = false;
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

  // Salva il lavoro
  saveWork() {
    // Aggiungi il nuovo lavoro all'array works
    const work: Work = {
      name: this.workForm.value.name,
      description: this.workForm.value.description,
      nodes: this.workForm.value.nodes.map((node: any) => node.value)
    };
    this.works.push(work);

    console.log('Lavoro salvato:', this.works);

    // Chiudi il modale
    this.closeModal();
  }

  // Elimina un lavoro
  delete(i: number) {
    this.works.splice(i, 1);
  }
}
