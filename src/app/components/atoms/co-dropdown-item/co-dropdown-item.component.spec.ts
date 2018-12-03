import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDropdownItemComponent } from './co-dropdown-item.component';

describe('CoDropdownItemComponent', () => {
  let component: CoDropdownItemComponent;
  let fixture: ComponentFixture<CoDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
