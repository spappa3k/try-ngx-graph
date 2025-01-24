import { Injectable } from '@angular/core';
import { Work } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class GrService {

  constructor() { }
  workToShow?:Work

}
