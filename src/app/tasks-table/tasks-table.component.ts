import { Component, Input } from '@angular/core';
import { TodoItem } from '../model/todo-list';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})
export class TasksTableComponent {

  @Input() tasksList: TodoItem[] = [];

  ngOnInit(){
    console.log(this.tasksList)
  }
}
