import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMobileMenuButtonComponent } from './co-mobile-menu-button.component';

describe('CoMobileMenuButtonComponent', () => {
  let component: CoMobileMenuButtonComponent;
  let fixture: ComponentFixture<CoMobileMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMobileMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMobileMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
