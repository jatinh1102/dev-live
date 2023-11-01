import { TestBed } from '@angular/core/testing';

import { CareersDetailsService } from './careers-details.service';

describe('CareersDetailsService', () => {
  let service: CareersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
