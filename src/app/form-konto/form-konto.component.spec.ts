import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKontoComponent } from './form-konto.component';

describe('FormKontoComponent', () => {
  let component: FormKontoComponent;
  let fixture: ComponentFixture<FormKontoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormKontoComponent]
    });
    fixture = TestBed.createComponent(FormKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
