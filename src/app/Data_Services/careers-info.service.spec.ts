import { TestBed } from '@angular/core/testing';

import { CareersInfoService } from './careers-info.service';

describe('CareersInfoService', () => {
  let service: CareersInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareersInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
