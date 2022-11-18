import { TestBed } from '@angular/core/testing';

import { DonutDevService } from './donut-dev.service';

describe('DonutDevService', () => {
  let service: DonutDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
