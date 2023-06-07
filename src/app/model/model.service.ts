import { Injectable } from "@angular/core";
import { TodoList, TodoItem } from "./todo-list";

@Injectable()
export class ModelService {

  list?: TodoList;

  showCompleted: boolean = false;

  constructor(){
    this.list = new TodoList
  }

  tasksList(): TodoItem[] {
    if (this.list === undefined)
      return [];

    if (this.showCompleted)
      return this.list.tasks;
    else
      return this.list.tasks.filter(task => !task.completed);

    /*
    // 1
    function filtrZadanNieukonczonych(task: TodoItem): boolean {
      return task.completed === false;
    }
    this.list.tasks.filter(filtrZadanNieukonczonych);

    // 2
    this.list.tasks.filter(function (task: TodoItem): boolean {
      return task.completed === false;
    });

    // 3
    this.list.tasks.filter((task: TodoItem): boolean => {
      return task.completed === false;
    });

    // 4
    this.list.tasks.filter((task: TodoItem): boolean => !task.completed);

    // 5
    this.list.tasks.filter(task => !task.completed);
    */
  }

  addTask(task: TodoItem) {
    this.list?.tasks?.push(task);
  }

}