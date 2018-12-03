import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDropdownItemListComponent } from './co-dropdown-item-list.component';

describe('CoDropdownItemListComponent', () => {
  let component: CoDropdownItemListComponent;
  let fixture: ComponentFixture<CoDropdownItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDropdownItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDropdownItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
