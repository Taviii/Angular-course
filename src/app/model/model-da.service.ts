import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './todo-list';
import { Observable } from 'rxjs';

@Injectable()
export class ModelDaService {

  readonly URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getList(id: number): Observable<TodoList> {
    return this.http.get<TodoList>(`${this.URL}/lista/${id}`);
  }

  saveList(id: number, list: TodoList): Observable<void> {
    const list1 = {
      ...list,
      id: id
    };
    return this.http.put<void>(`${this.URL}/lista/${id}`, list1);
  }
}
