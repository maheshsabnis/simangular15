import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptComponent } from './communicationcomponents/app.dept.component';
import { EmpComponent } from './communicationcomponents/app.emp.component';
import { ColorDirective } from './directives/attributedirectives/app.color.directive';
import { TableComponent } from './directives/componentsdirectives/app.table.component';
import { ReactiveFormComponent } from './reactiveforms/app.reactiveform.component';
import { RestClientComponent } from './restclientcomponents/app.restclient.component';
import { RxJsSimpleComponent } from './rxjsops/app.rxjssimple.component';
import { StringUtilities } from './services/app.stringutil.service';
import { ContainerComponent } from './standalonecomponents/app.container.component';

@NgModule({
  declarations: [
    AppComponent, TableComponent, ColorDirective,
    DeptComponent,  EmpComponent, RestClientComponent,
    RxJsSimpleComponent, ReactiveFormComponent

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule
  ],
  // Offers DI Container for Services
  providers: [StringUtilities],
  bootstrap: [ReactiveFormComponent]
})
export class AppModule { }
