import { Directive, Input } from '@angular/core';
import { ColorDirective } from './app.color.directive';

@Directive({
  selector: '[container]'

})
export class ContainerDirective {
  constructor() { }

  @Input('container') container:string='';

}
