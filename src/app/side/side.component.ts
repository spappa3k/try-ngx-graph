import { Component } from '@angular/core';
import { Work } from '../../models/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  nameRegex: RegExp = /^[a-zA-Z\s'-]{3,}$/;


  counterWorks = 0;
  isModalOpen = false; // Stato del modale

  // Lavori esistenti
  works: Work[] = [];

  // Oggetto temporaneo per raccogliere i dati del modulo
  tempWork: Work = {
    name: '',
    description: '',
    nodes: ['']
  };

workForm?:FormGroup;

constructor(private fb:FormBuilder){

  this.workForm=this.fb.group({
    workName: ['', [Validators.required, Validators.pattern(this.nameRegex)]], 
    workDescription: ['', Validators.required],
    workNodes: ['',Validators.required]
  })
}




  // Apri il modale
  openModal() {
    this.isModalOpen = true;
    // Resetta il form
    this.tempWork = { name: '', description: '', nodes: [''] };
  }

  // Chiudi il modale
  closeModal() {
    this.isModalOpen = false;
  }

  // Aggiungi un nuovo nodo
  addNode() {
    if (this.tempWork.nodes.length < 8) {
      this.tempWork.nodes.push('');
    } else {
      alert('Puoi aggiungere al massimo 8 nodi.');
    }
  }

  // Salva il lavoro
  saveWork() {
    // Aggiungi il nuovo lavoro all'array works
    this.works.push({ ...this.tempWork });

    console.log('Lavoro salvato:', this.works);

    // Chiudi il modale
    this.closeModal();
  }
// Elimina work
  delete(i:number){
    this.works.splice(i, 1);
  }
}
