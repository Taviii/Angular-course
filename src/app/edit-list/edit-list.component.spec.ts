import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListComponent } from './edit-list.component';

describe('EditListComponentComponent', () => {
  let component: EditListComponent;
  let fixture: ComponentFixture<EditListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditListComponent]
    });
    fixture = TestBed.createComponent(EditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
