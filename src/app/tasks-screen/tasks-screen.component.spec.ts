import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksScreenComponent } from './tasks-screen.component';

describe('TasksScreenComponent', () => {
  let component: TasksScreenComponent;
  let fixture: ComponentFixture<TasksScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksScreenComponent]
    });
    fixture = TestBed.createComponent(TasksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
