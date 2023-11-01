import { TestBed } from '@angular/core/testing';

import { MongodbPostService } from './mongodb-post.service';

describe('MongodbPostService', () => {
  let service: MongodbPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongodbPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
