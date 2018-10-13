import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoStepperDotsComponent } from './co-stepper-dots.component';

describe('CoStepperDotsComponent', () => {
  let component: CoStepperDotsComponent;
  let fixture: ComponentFixture<CoStepperDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoStepperDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoStepperDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
