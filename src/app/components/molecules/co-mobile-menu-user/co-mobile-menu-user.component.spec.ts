import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMobileMenuUserComponent } from './co-mobile-menu-user.component';

describe('CoMobileMenuUserComponent', () => {
  let component: CoMobileMenuUserComponent;
  let fixture: ComponentFixture<CoMobileMenuUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMobileMenuUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMobileMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
