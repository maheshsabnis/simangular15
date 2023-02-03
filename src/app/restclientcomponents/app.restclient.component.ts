import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/models/app.restresponse.model';
import { RestClientService } from '../services/app.restclient.service';

@Component({
  selector: 'app-restclient-component',
  templateUrl: './app.resclient.view.html'
})
export class RestClientComponent implements OnInit {
  prd:ProductResponse;
  products:Array<ProductResponse>;
  constructor(private serv:RestClientService) {
    this.prd = new ProductResponse(10009,'Radient Mouse');
    this.products = new Array<ProductResponse>();
  }

  ngOnInit(): void {
     this.serv.get().subscribe({
      // next: The Next availabe response emitted from Observable
      next: (resp)=>{this.products=resp},
      error: (err)=>{
         console.log(`Comunication Error ${err}`);
      }
     });

  }
  save():void {
    this.prd = new ProductResponse(10009,'Radient Mouse');
    this.serv.post(this.prd).subscribe({
      // next: The Next availabe response emitted from Observable
      next: (resp)=>{this.products=resp},
      error: (err)=>{
         console.log(`Comunication Error ${err}`);
      }
     });
  }
}
