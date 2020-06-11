import { TestBed } from '@angular/core/testing';

import { SormeresService } from './sormeres.service';

describe('SormeresService', () => {
  let service: SormeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SormeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
