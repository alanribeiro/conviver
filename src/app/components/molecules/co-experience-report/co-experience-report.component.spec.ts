import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoExperienceReportComponent } from './co-experience-report.component';

describe('CoExperienceReportComponent', () => {
  let component: CoExperienceReportComponent;
  let fixture: ComponentFixture<CoExperienceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoExperienceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoExperienceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
