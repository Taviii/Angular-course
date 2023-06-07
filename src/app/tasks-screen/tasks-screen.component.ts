import { Component } from '@angular/core';
import { ModelService } from '../model/model.service';
import { TodoList } from '../model/todo-list';
import { FormControl, FormGroup, NgControl, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-screen',
  templateUrl: './tasks-screen.component.html',
  styleUrls: ['./tasks-screen.component.css']
})
export class TasksScreenComponent {

  constructor(public model: ModelService) {
    setTimeout(() => model.list = new TodoList('Lista zadań'), 0);
  }

  title: any;
  tekst: string | undefined;
  
  zapisz(nazwa: NgControl){
   alert(nazwa.valid);
  }

  //reactive
  nazwa2 = new FormControl();
  zmien2() {
    this.nazwa2.setValue('Jan');
  }

  zapisz2(){
    alert(this.nazwa2.value);
   }

  form = new FormGroup({
    imie: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nazwisko: new FormControl()
  });

  formularz = new FormGroup({
    imie: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nazwisko: new FormControl('', [/*niedozwolonaNazwa('Kowalski')*/])
  });

  zmien3(){
    this.formularz.setValue({
      imie: 'Jan',
      nazwisko: 'Kowalski'
    });

    this.formularz.patchValue({
      imie: 'Adam'
    });

    this.formularz.controls.imie.setValue('Adam');
  }

    zapisz3(){
      if (this.formularz.invalid)
        alert('błąd');
      else
        alert(JSON.stringify(this.formularz.value, null, 2 ));
    }

    // function niedozwolonaNazwa(zabron: string): ValidationFn {
    //   return 
    // };

  tasksCount(): string {
    const count = this.model.tasksList().length;
    switch (count) {
      case 0: return 'Brak zadań';
      case 1: return '1 zadanie';
      case 2:
      case 3:
      case 4: return `${count} zadania`;
      default: return `${count} zadań`;
    }
  }
}
// function niedozwolonaNazwa(arg0: string): import("@angular/forms").ValidatorFn {
//   // throw new Error('Function not implemented.'
//   );
// }

