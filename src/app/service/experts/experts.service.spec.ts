import { TestBed } from '@angular/core/testing';

import { ExpertsService } from './experts.service';

describe('ExpertsService', () => {
  let service: ExpertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
