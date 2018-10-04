import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMenuItemComponent } from './co-menu-item.component';

describe('CoMenuItemComponent', () => {
  let component: CoMenuItemComponent;
  let fixture: ComponentFixture<CoMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
