import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMobileMenuComponent } from './co-mobile-menu.component';

describe('CoMobileMenuComponent', () => {
  let component: CoMobileMenuComponent;
  let fixture: ComponentFixture<CoMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
