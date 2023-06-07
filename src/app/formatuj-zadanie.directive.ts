import { AfterContentChecked, Directive, ElementRef, Input } from '@angular/core';
import { TodoItem } from './model/todo-list';

@Directive({
  selector: '[appFormatujZadanie]'
})
export class FormatujZadanieDirective implements AfterContentChecked{

  @Input('appFormatujZadanie') task?: TodoItem;

  constructor(private element: ElementRef) {

   }

   ngAfterContentChecked(){
    if (this.task?.completed)
      this.element.nativeElement.classList.add('text-decoration-line-through');
    else
      this.element.nativeElement.classList.remove('text-decoration-line-through');
   }

}
