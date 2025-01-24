import { Component, OnInit, SimpleChanges} from '@angular/core';
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

  nodeData: any[] = [];
  linkData: any[]=  [];  


  ngOnInit(): void {
    this.workReceived = this.gr.$workToShow;
    this.initializeGraphData();
    
    }

    ngOnChanges(changes: SimpleChanges): void {
      // Sottoscrizione all'Observable del servizio
      this.gr.workToShow.subscribe((work) => {
        if (work) {
          this.workReceived = work; // Aggiorna il valore di workReceived
          this.initializeGraphData(); // Rigenera nodi e link
        }
      });
    }
initializeGraphData(){
  
  if (this.workReceived?.nodes) {
    for (let i = 0; i < this.workReceived.nodes.length; i++) {
      this.nodeData.push({
        id: `node${i + 1}`,  // Puoi generare un ID unico, come "node1", "node2", ecc.
        label: this.workReceived.nodes[i]  // Assegni il valore della stringa come label
      });
    }

     // Creazione dei link (collegamenti tra i nodi)
     for (let i = 0; i < this.workReceived.nodes.length - 1; i++) {
      this.linkData.push({
        id: `link${i + 1}`,  // ID unico per ogni link
        source: `node${i + 1}`,  // ID del nodo di partenza
        target: `node${i + 2}`,  // ID del nodo di arrivo (collega il nodo i al nodo i+1)
  
  })
}
  }
}
}
