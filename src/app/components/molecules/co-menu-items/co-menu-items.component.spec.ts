import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMenuItemsComponent } from './co-menu-items.component';

describe('CoMenuItemsComponent', () => {
  let component: CoMenuItemsComponent;
  let fixture: ComponentFixture<CoMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
