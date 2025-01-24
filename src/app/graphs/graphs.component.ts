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
      this.gr.workToShow.subscribe((work) => {
        if (work) {
          this.workReceived = work;
          this.initializeGraphData();
        }
      });
    }
initializeGraphData(){
  
  if (this.workReceived?.nodes) {
    for (let i = 0; i < this.workReceived.nodes.length; i++) {
      this.nodeData.push({
        id: `node${i + 1}`, 
        label: this.workReceived.nodes[i]  
      });
    }

     // -----------------------------------copiato e adattato -------------------------------
     for (let i = 0; i < this.workReceived.nodes.length - 1; i++) {
      this.linkData.push({
        id: `link${i + 1}`,
        source: `node${i + 1}`,  
        target: `node${i + 2}`,  
  
  })
}
  }
}
}
