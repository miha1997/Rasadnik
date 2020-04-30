import { TestBed } from '@angular/core/testing';

import { RasadnikService } from './rasadnik.service';

describe('RasadnikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RasadnikService = TestBed.get(RasadnikService);
    expect(service).toBeTruthy();
  });
});
