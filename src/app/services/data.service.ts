import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private selectedPtfBehavior = new BehaviorSubject({})
  currentSelectedPtf = this.selectedPtfBehavior.asObservable()

  constructor() { }

  changeSelectedPtf(selectedPtf: string) {
    this.selectedPtfBehavior.next(selectedPtf)
  }
  
}