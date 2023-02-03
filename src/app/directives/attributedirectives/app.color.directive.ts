import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector:'[setColor]'//,
  //standalone:true
})
export class ColorDirective {
  constructor(private element:ElementRef, private render:Renderer2){}
  // The property is mapped wit the Selector name
  @Input('setColor')setColor:string = '';

  // Logic function that will be executed when the directive is activated based
  // on Events on HTML UI elements

  private updateColor(color:string):void{
    this.render.setStyle(this.element.nativeElement, "backgroundColor", color);
  }

  // Define methods those will be invoked when DOM raises events
  // These methods will invoke the logic function to make sure that
  // the HTML UI will be rendered as per the requirements

  @HostListener('mouseenter')
  onMouseEnter():void{
     this.updateColor(this.setColor);
  }
  @HostListener('mouseleave')
  onMouseLeave():void {
     this.updateColor('');
  }
}
