import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor(private elementRef : ElementRef) { }

  @HostListener('input', ['$event'])

  mobNumValidation(){
    console.log('Number Only Directive');
    let mobNumInpBoxValue = this.elementRef.nativeElement.value;
    console.log('mobNumInpBoxValue>>', mobNumInpBoxValue);
    this.elementRef.nativeElement.value = mobNumInpBoxValue.replace(/[^0-9]*/g, '');
    
  }

}
