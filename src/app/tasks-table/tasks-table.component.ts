import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../model/todo-list';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.css'],
})
export class TasksTableComponent {

  @Input() tasksList: TodoItem[] = [];

  @Output() taskChanged = new EventEmitter<void>();

}
