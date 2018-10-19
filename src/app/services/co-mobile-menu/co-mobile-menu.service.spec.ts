import { TestBed, inject } from '@angular/core/testing';

import { CoMobileMenuService } from './co-mobile-menu.service';

describe('CoMobileMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoMobileMenuService]
    });
  });

  it('should be created', inject([CoMobileMenuService], (service: CoMobileMenuService) => {
    expect(service).toBeTruthy();
  }));
});
