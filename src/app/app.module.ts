import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './directives/attributedirectives/app.color.directive';
import { TableComponent } from './directives/componentsdirectives/app.table.component';
import { StringUtilities } from './services/app.stringutil.service';
import { ContainerComponent } from './standalonecomponents/app.container.component';

@NgModule({
  declarations: [
    AppComponent, TableComponent//, ColorDirective
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [StringUtilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
