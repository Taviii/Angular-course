import { AfterContentInit, Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appWyroznij]'
})
export class WyroznijDirective implements AfterContentInit {

    @Input('appWyroznij') color?: string;

    constructor(private element: ElementRef){
    }
    ngAfterContentInit(){
        this.element.nativeElement.classList.add('bg-success');
        this.element.nativeElement.innerText = '#' + this.element.nativeElement.innerText;
    }
}

// <td appWyroznij>