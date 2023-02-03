import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorDirective } from '../directives/attributedirectives/app.color.directive';
import { StringUtilities } from '../services/app.stringutil.service';

@Component({
  standalone:true,
  selector: 'app-container-component',
  templateUrl: './app.container.view.html',
  providers:[StringUtilities],
  //imports:[ColorDirective]
})
export class ContainerComponent implements OnInit {
  message:string;
  constructor(private serv:StringUtilities) {
    this.message = "I am a Standalone Component!!";
  }

  ngOnInit(): void { }

  changeMessageCase():void {
    this.message = this.serv.changeCase(this.message, 'u');
  }
}
