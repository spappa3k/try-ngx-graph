import { Component } from '@angular/core';
import { Work } from '../../models/models';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
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

  delete(i:number){
    this.works.splice(i, 1);
  }
}
