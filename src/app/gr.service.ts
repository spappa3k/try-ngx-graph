import { Injectable } from '@angular/core';
import { Work } from '../models/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrService {
$workToShow?:Work
  private workSubject = new BehaviorSubject<Work | null>(null); 


  constructor() { }
workToShow=this.workSubject.asObservable(); // Rende il soggetto un Observable

}
