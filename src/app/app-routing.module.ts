import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './routingapp/createproduct/createproduct.component';
import { EditproductComponent } from './routingapp/editproduct/editproduct.component';
import { ListproductsComponent } from './routingapp/listproducts/listproducts.component';

// define the route table
const routes: Routes = [
  {path:'', component:ListproductsComponent}, // default
  {path:'create', component:CreateproductComponent},
  {path:'edit/:id', component:EditproductComponent},
  {path:'**', redirectTo:''} // if no path match with URL then redirect top default i.e.ListproductsComponent
];

@NgModule({
  // RouterModule.forRoot(routes) : Load the Route Table
  // at application level
  // this will be the Parent or Root Level Routing
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
