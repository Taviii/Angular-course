import { Injectable } from "@angular/core";
import { TodoList, TodoItem } from "./todo-list";
import { ModelDaService } from "./model-da.service";

@Injectable()
export class ModelService {

  list?: TodoList;

  showCompleted: boolean = false;

  readonly ID = 1;

  constructor(private da: ModelDaService){
    da.getList(this.ID).subscribe(listaZSerwera => this.list = listaZSerwera)
  }

  tasksList(): TodoItem[] {
    if (this.list === undefined)
      return [];

    if (this.showCompleted)
      return this.list.tasks;
    else
      return this.list.tasks.filter(task => !task.completed);
  }

  addTask(task: TodoItem) {
    this.list?.tasks?.push(task);
    this.saveList();
  }

  saveList(){
    if (!this.list)
      throw new Error('List is empty');
    this.da.saveList(this.ID, this.list).subscribe();
  }

}