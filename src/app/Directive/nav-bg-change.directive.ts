import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
 selector: '[appNavBgChange]'
})
export class NavBgChangeDirective {

 constructor(private eleref: ElementRef) { }

 @HostListener('window:scroll', ['$event'])

 onWindowScroll(){
 const scrollY = window.scrollY

 if(scrollY >= 100){
 this.eleref.nativeElement.classList.add('addbg');
 }else{
 this.eleref.nativeElement.classList.remove('addbg')
 }
 }

}