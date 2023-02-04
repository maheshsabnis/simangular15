import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,Validators, UntypedFormGroup, UntypedFormControl} from '@angular/forms';
import { Categories, Manufacturers } from 'src/models/app.constants';
import { ProductLogic } from 'src/models/app.product.logic';
import { Product } from 'src/models/app.products.model';
import { StringUtilities } from './../services/app.stringutil.service';
import { CustomValidator } from './app.custom.validator';

@Component({
  selector: 'app-reactiveform-component',
  templateUrl: './app.reactiveform.view.html'
})
export class ReactiveFormComponent  implements OnInit{
    product: Product;
    products:Array<Product>;
    private logic: ProductLogic;
    manufacturers = Manufacturers;
    categories = Categories;
    tableColumns:Array<string>;
    frmProduct: FormGroup;
    // Inject the service
    constructor(private serv: StringUtilities){
      this.product = new Product(0,'','','',0);
      this.logic = new ProductLogic();
      this.products = new Array<Product>();
      this.tableColumns = new Array<string>();

      // Define an instance of FormGroup
      // as a collection of FormControl
      // map the Model class properties with FromControl
      // Thight Cpupling between HTML Form and the Product Class
      // ANgular 14+ Explict Types Definitions for Reactive Forms
      this.frmProduct = new FormGroup({
        ProductId: new FormControl<number>(this.product.ProductId,
            Validators.compose([
              Validators.required, Validators.minLength(3),
              Validators.maxLength(8), Validators.pattern('[0-9]*')
            ])),
                    // Angular 14+ changes in reactive forms
        ProductName: new FormControl<string>(this.product.ProductName, {nonNullable:true}),
        Manufacturer: new FormControl<string>(this.product.Manufacturer),
        Category: new FormControl<string>(this.product.Category),
        Price: new FormControl<number>(this.product.Price, Validators.compose([
           CustomValidator.priceGreaterThan2000
        ])),
      });
// 14+
      const ProductName = new FormControl<string | null>(null);
      ProductName.setValue('Laptop'); // Runtime Error


      const myform = new UntypedFormGroup({
         email: new UntypedFormControl('')
      })


    }


    ngOnInit(): void {
      console.log("Ng On Init is Called");
      this.products = this.logic.getProducts();
      // generate table headers
      // Read all properties of Product class
      this.tableColumns = Object.keys(this.product);

    }

    clear():void {
      this.product = new Product(0,'','','',0);
      // set the empty object
      this.frmProduct.setValue(this.product);
    }
    save():void {
      // Read the FormGroup value
      // Internally this will read values for
      // each FormControl
      this.product = this.frmProduct.value;
      this.products = this.logic.addProduct(this.product);
    }
    // $event: The event parameter
    // specied by the JavaScript Object Model
    // for Custom Eventing

    onDataReceived(event:any):void {
      this.product = event;
    }
}
