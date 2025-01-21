import { Component } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {

  nodeData = [
    { id: 'first', label: 'Pippo' },
    { id: 'second', label: 'Node 2' },
    { id: 'third', label: 'Node 3' }
  ];

  // Metodo per gestire il click sui nodi
  onNodeClick(node: any) {
    console.log('Nodo cliccato:', node.label);
    alert(`Nodo cliccato: ${node.label}`);
  }

}
