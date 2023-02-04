import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-component',
  template: `
     <h3>The Message Component</h3>
  `
})
export class MessageComponent implements OnInit {
  message:string;
  constructor() {
    this.message = 'I am a Component from Shared Module';
   }

  ngOnInit(): void { }
}
