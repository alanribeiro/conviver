import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoStepperDotsDotComponent } from './co-stepper-dots-dot.component';

describe('CoStepperDotsDotComponent', () => {
  let component: CoStepperDotsDotComponent;
  let fixture: ComponentFixture<CoStepperDotsDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoStepperDotsDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoStepperDotsDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
