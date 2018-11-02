import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRadioStyleComponent } from './co-radio-style.component';

describe('CoRadioStyleComponent', () => {
  let component: CoRadioStyleComponent;
  let fixture: ComponentFixture<CoRadioStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRadioStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRadioStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
