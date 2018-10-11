import { TestBed, inject } from '@angular/core/testing';

import { MainHeaderService } from './main-header.service';

describe('MainHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainHeaderService]
    });
  });

  it('should be created', inject([MainHeaderService], (service: MainHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
