import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMobileMenuItemListComponent } from './co-mobile-menu-item-list.component';

describe('CoMobileMenuItemListComponent', () => {
  let component: CoMobileMenuItemListComponent;
  let fixture: ComponentFixture<CoMobileMenuItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMobileMenuItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMobileMenuItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
