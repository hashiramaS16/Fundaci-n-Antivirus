import { TestBed } from '@angular/core/testing';

import { LogicWompiService } from './logic-wompi.service';

describe('LogicWompiService', () => {
  let service: LogicWompiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicWompiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
