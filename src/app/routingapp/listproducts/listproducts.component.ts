import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/app.productrest.service';
import { ProductInfo } from 'src/models/app.productinfo.model';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html'
})
export class ListproductsComponent implements OnInit, OnDestroy{

  products:Array<ProductInfo>
  statusMessage:string;
  constructor(private serv:ProductInfoService,
      private router:Router ){
    this.products = new Array<ProductInfo>();
    this.statusMessage = '';
  }


  ngOnInit(): void {
      console.log('On Init Called');
      this.serv.getProducts().subscribe({
        next: (resp)=> {
          this.products = resp;
          this.statusMessage = 'Operation is Succesfull';
        },
        error:(err)=>
        {
          this.statusMessage = `Operation failed ${err}`
        }
      });

  }
  ngOnDestroy(): void {
    console.log('On Destroy Called');
  }

  navigateToEdit(event):void {
     alert(event.ProductRowId);
     this.router.navigate(['edit', event.ProductRowId]);
  }
}
