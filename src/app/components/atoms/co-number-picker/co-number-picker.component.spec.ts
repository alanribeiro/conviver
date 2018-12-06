import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNumberPickerComponent } from './co-number-picker.component';

describe('CoNumberPickerComponent', () => {
  let component: CoNumberPickerComponent;
  let fixture: ComponentFixture<CoNumberPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoNumberPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
