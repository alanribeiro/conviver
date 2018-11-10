import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoErrorFeedbackComponent } from './co-error-feedback.component';

describe('CoErrorFeedbackComponent', () => {
  let component: CoErrorFeedbackComponent;
  let fixture: ComponentFixture<CoErrorFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoErrorFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoErrorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
