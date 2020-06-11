import { TestBed } from '@angular/core/testing';

import { BeerDrinkingService } from './beer-drinking.service';

describe('BeerDrinkingService', () => {
  let service: BeerDrinkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerDrinkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
