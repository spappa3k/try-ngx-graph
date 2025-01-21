import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes = [
    { id: 'start', label: 'Start' },
    { id: 'process', label: 'Process' },
    {id : 'pippo', label:'Pippo'},
    { id: 'end', label: 'End' }
  ];

  links = [
    { source: 'start', target: 'process', label: 'to Pippo' },
    {source:'pippo', target:'process', label:'to Process'},
    { source: 'process', target: 'end', label: 'to End' }
  ];
}
