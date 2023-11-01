import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareersDetailsService {

  constructor() {}
  careers_details = new BehaviorSubject('');

  get_careers_details() {
    return this.careers_details.asObservable();
  }

  set_careers_details(value: any) {
    this.careers_details.next(value);
  }
}
