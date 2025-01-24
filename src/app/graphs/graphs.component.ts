import { Component, OnInit } from '@angular/core';
import { Work } from '../../models/models';
import { GrService } from '../gr.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent implements OnInit{
  workReceived?:Work

  constructor(private gr:GrService){}

  nodeData = [
    { id: 'first', label: this.workReceived?.name },
    { id: 'second', label: 'Node 2' },
    { id: 'third', label: 'Node 3' }
  ];

  // Metodo per gestire il click sui nodi
  onNodeClick(node: any) {
    console.log('Nodo cliccato:', node.label);
    alert(`Nodo cliccato: ${node.label}`);
  }

  ngOnInit(): void {
    this.workReceived=this.gr.workToShow;
    console.log(this.workReceived);
  }


}
