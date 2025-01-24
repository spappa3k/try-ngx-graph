import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try-ngx-graph';

  isGraphOpen: boolean = false;

  // Metodo per ricevere l'evento dal figlio e aggiornare lo stato
  riceviAperturaGrafico(apri: boolean) {
    this.isGraphOpen = apri;
    console.log('Apertura grafico:', this.isGraphOpen);
  }
}

