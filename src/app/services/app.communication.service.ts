import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  //notify:EventEmitter<any>;

  notify: Subject<any>;

  constructor() {
   // this.notify = new EventEmitter<any>();
   this.notify = new Subject<any>();
  }

  onNotify(id:any):void {
    // the value of 'id' will be notified to the subscriber
    //this.notify.emit(id);
    // next() is an auto-emit of the lates value
    // available into the Subject (Observable)
    this.notify.next(id);
  }


}
