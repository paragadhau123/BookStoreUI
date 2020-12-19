import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private messageSource = new BehaviorSubject<any>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  private messageSource1 = new BehaviorSubject<any>([{}]);
  currentMessage1 = this.messageSource1.asObservable();

  changeCartLength(message: any) {
    this.messageSource1.next(message)
  }
    private messageSource2 = new BehaviorSubject<any>([{}]);
    currentMessage2 = this.messageSource2.asObservable();
  
    decreaseCartLength(message: any) {
      this.messageSource2.next(message)
    }
  }
