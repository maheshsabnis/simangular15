import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInfoService } from 'src/app/services/app.productrest.service';
import { ProductInfo } from 'src/models/app.productinfo.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product: ProductInfo;
  constructor(private srev: ProductInfoService,
    private router:Router, private act:ActivatedRoute){
    this.product = new ProductInfo(0,'','','','','',0);
  }

  // Subscribe to Current URL and read
  // the ROute Parameter i.e. id
  ngOnInit(): void {
      this.act.params.subscribe((param)=>{
          // Angular 12+ the ROute Parameter is
          // read as index e.g. param['PARAMETER-NAME']
          // earlier to it it was as follows
          // param.[PARAMETER-NAME] e.g. param.id
         this.product.ProductRowId = param['id'];

         // make call to Angular service
         this.srev.getProductById( this.product.ProductRowId)
            .subscribe({
              next:(resp)=> this.product = resp,
              error:(err)=>console.log(`Error Occurred ${err}`)
            });

      });
  }

  clear():void{
    this.product = new ProductInfo(0,'','','','','',0);
  }
  save():void {
    this.srev.putProduct(this.product.ProductRowId, this.product).subscribe({
      next:(resp)=>{
        // explicitly navigate to the default page
        this.router.navigate(['']);
      },
      error:(err)=>{}
    });
  }
}
