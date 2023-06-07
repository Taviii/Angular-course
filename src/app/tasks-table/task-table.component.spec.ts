import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTableComponent } from './tasks-table.component';
import { TodoItem } from '../model/todo-list';
import { WyroznijDirective } from '../wyroznij.directive';
import { FormatujZadanieDirective } from '../formatuj-zadanie.directive';
import { FormsModule } from '@angular/forms';

describe('TasksTableComponent', () => {
  let component: TasksTableComponent;
  let fixture: ComponentFixture<TasksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksTableComponent, WyroznijDirective, FormatujZadanieDirective],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(TasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Brak zadań', () => {
    component.tasksList = [];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('table')).toBeNull();
  });

  it('1 zadanie', () => {
    component.tasksList = [
      new TodoItem('Zadanie 1'),
    ];
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('tbody tr td:nth-child(2)');
    const tekst = element.innertext;
    expect(tekst).toBe('Zadanie1');
  });
});
