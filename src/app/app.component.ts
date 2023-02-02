import { Component, OnInit } from '@angular/core';
import { Categories, Manufacturers } from 'src/models/app.constants';
import { ProductLogic } from 'src/models/app.product.logic';
import { Product } from 'src/models/app.products.model';
import { StringUtilities } from './services/app.stringutil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
    product: Product;
    products:Array<Product>;
    private logic: ProductLogic;
    manufacturers = Manufacturers;
    categories = Categories;
    tableColumns:Array<string>;
    // Inject the service
    constructor(private serv: StringUtilities){
      this.product = new Product(0,'','','',0);
      this.logic = new ProductLogic();
      this.products = new Array<Product>();
      this.tableColumns = new Array<string>();
      console.log("Constructor Called");

    }

// This will be invoked immediately after the COnstructor
// Write a Resource Ibtensive Code Here
// e.g. Observable Subscriptions in case of
// One, Sequential, or Parallel AJAX Calls
    ngOnInit(): void {
      console.log("Ng On Init is Called");
      this.products = this.logic.getProducts();
      // generate table headers
      // Read all properties of Product class
      this.tableColumns = Object.keys(this.product);
    }

    clear():void {
      this.product = new Product(0,'','','',0);
    }
    save():void {
      this.products = this.logic.addProduct(this.product);
    }
    // $event: The event parameter
    // specied by the JavaScript Object Model
    // for Custom Eventing

    onDataReceived(event:any):void {
      this.product = event;
    }
}
