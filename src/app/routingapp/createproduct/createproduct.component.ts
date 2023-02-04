import { Component } from '@angular/core';
import { ProductInfoService } from 'src/app/services/app.productrest.service';
import { ProductInfo } from 'src/models/app.productinfo.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html'
})
export class CreateproductComponent {
  product: ProductInfo;
  constructor(private srev: ProductInfoService, private router:Router){
    this.product = new ProductInfo(0,'','','','','',0);
  }

  clear():void{
    this.product = new ProductInfo(0,'','','','','',0);
  }
  save():void {
    this.srev.postProduct(this.product).subscribe({
      next:(resp)=>{
        // explicitly navigate to the default page
        this.router.navigate(['']);
      },
      error:(err)=>{}
    });
  }
}
