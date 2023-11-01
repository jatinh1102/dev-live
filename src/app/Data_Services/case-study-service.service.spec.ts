import { TestBed } from '@angular/core/testing';

import { CaseStudyServiceService } from './case-study-service.service';

describe('CaseStudyServiceService', () => {
  let service: CaseStudyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseStudyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
