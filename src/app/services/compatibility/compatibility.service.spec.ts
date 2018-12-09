import { TestBed, inject } from '@angular/core/testing';

import { CompatibilityService } from './compatibility.service';

describe('CompatibilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompatibilityService]
    });
  });

  it('should be created', inject([CompatibilityService], (service: CompatibilityService) => {
    expect(service).toBeTruthy();
  }));
});
