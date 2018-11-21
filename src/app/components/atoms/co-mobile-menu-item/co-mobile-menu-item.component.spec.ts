import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMobileMenuItemComponent } from './co-mobile-menu-item.component';

describe('CoMobileMenuItemComponent', () => {
  let component: CoMobileMenuItemComponent;
  let fixture: ComponentFixture<CoMobileMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMobileMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMobileMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
