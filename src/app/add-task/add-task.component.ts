import { Component, EventEmitter, Output } from "@angular/core";
import { TodoItem } from "../model/todo-list";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {

  @Output() addingTask = new EventEmitter<TodoItem>();

  addTask(name: string) {
    this.addingTask.emit(new TodoItem(name));
  }
}