import { TestBed } from '@angular/core/testing';

import { FlikrService } from './flikr.service';

describe('FlikrService', () => {
  let service: FlikrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlikrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
