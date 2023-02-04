import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './component/app.messsage.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: '', component: MessageComponent}
];


@NgModule({
  declarations: [MessageComponent],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [],
  providers: [],
})
export class SharedModule {}
