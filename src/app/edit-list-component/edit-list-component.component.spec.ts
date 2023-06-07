import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListComponentComponent } from './edit-list-component.component';

describe('EditListComponentComponent', () => {
  let component: EditListComponentComponent;
  let fixture: ComponentFixture<EditListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditListComponentComponent]
    });
    fixture = TestBed.createComponent(EditListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
