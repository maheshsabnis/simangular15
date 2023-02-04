import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouting-component',
  template: `
     <h2>The Angular Routing Application</h2>
     <div class="container">
     <table class="table table-bordered table-striped table-warning">
       <tbody>
        <tr>
          <td>
             <a [routerLink]="['']">Products List</a>
          </td>
          <td>
             <a [routerLink]="['create']">Create New Product</a>
          </td>
        </tr>
       </tbody>
     </table>
      <hr/>
      <router-outlet></router-outlet>
</div>
  `
})
export class MainRoutingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
