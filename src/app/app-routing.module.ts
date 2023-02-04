import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './routingapp/createproduct/createproduct.component';
import { EditproductComponent } from './routingapp/editproduct/editproduct.component';
import { ListproductsComponent } from './routingapp/listproducts/listproducts.component';
import { SearchComponent } from './routingapp/search/search.component';

// define the route table
const routes: Routes = [
    // children: an early loaded component in ROuter
    // Sub-Routing and not Lazy Loading
  {path:'', component:ListproductsComponent, children:[
   { path:'search', component:SearchComponent}
  ]}, // default
  {path:'create', component:CreateproductComponent},
  {path:'edit/:id', component:EditproductComponent},
  {path:'lazy', // Loading Module on Demand
    loadChildren:()=> import('./../lib/app.shared.module')
    .then(m=>m.SharedModule)},
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
