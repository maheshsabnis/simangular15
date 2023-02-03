import { Component, OnInit } from '@angular/core';
import { of,map } from 'rxjs';

import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjssimple-component',
  template: `
     <h2>Simple RxJS</h2>
  `
})
export class RxJsSimpleComponent implements OnInit {

  names=["Tejas", "Mahesh", "Ramesh", "Ram", "Kaustubh", "Nainish", "Krushna", "Samarth"]

  myNameObservable = of(this.names);

  myMappedObservable = this.myNameObservable.pipe(map((n,i)=>{
    return  n.length > 6;
  }));



  constructor() { }

  ngOnInit(): void {
     this.myNameObservable.subscribe({
      next: (name)=>console.log(name),
      error:(err)=>console.log('error'),
      complete:()=>console.log('Done with Reading')
     });
     console.log();
     console.log('With Map');
     this.myMappedObservable.subscribe({
      next: (name)=>console.log(name),
      error:(err)=>console.log('error'),
      complete:()=>console.log('Done with Map Method')
     });
     console.log();


  }
}
