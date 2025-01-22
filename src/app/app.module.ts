import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphsComponent } from './graphs/graphs.component';
import { SideComponent } from './side/side.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    GraphsComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
