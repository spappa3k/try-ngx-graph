import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  isModalOpen = false; // Stato del modale
  work = {
    name: '',
    description: '',
    nodes: [''] // Lista di nodi (inizialmente 1)
  };

  // Apri il modale
  openModal() {
    this.isModalOpen = true;
  }

  // Chiudi il modale
  closeModal() {
    this.isModalOpen = false;
  }

  // Aggiungi un nuovo nodo
  addNode() {
    if (this.work.nodes.length < 10) {
      this.work.nodes.push('');
    } else {
      alert('Puoi aggiungere al massimo 10 nodi.');
    }
  }

  // Salva il lavoro
  saveWork() {
    console.log('Lavoro salvato:', this.work);
    this.closeModal();
  }
}