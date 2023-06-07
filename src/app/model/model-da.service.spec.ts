import { TestBed } from '@angular/core/testing';

import { ModelDaService } from './model-da.service';

describe('ModelDaService', () => {
  let service: ModelDaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelDaService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
