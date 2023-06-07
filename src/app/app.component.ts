import { Component, Input } from "@angular/core";
import { TodoItem, TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list?: TodoList;

  showCompleted: boolean = false;

  constructor() {
    this.list = new TodoList('Lista zadań');

    // for (let task of this.list.tasks){
    //   console.log(task);
    // }
  }

  tasksList(): TodoItem[] {
    if (this.list === undefined)
      return [];
    if (this.showCompleted)
    return  this.list.tasks;
    else
    return this.list.tasks.filter(task => !task.completed);

    // function filtrZadanNiekonczonych(task: TodoItem): boolean {
    //   return task.completed;
    // }
    // this.list?.tasks.filter(filtrZadanNiekonczonych);

  }

  tasksCount(): string {
    const count = this.tasksList().length;
    switch (count) {
      case 0: return 'Brak zadań';
      case 1: return '1 zadanie';
      case 2: return '2 zadania';
      case 3: return '3 zadania';
      case 4: return `${count} zadania`;
      default: return `${count} zadań`;
    }
  }

  addTask(name: string) {
    this.list?.tasks?.push(new TodoItem(name));
  }

}
