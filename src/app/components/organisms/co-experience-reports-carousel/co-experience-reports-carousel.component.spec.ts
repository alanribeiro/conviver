import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoExperienceReportsCarouselComponent } from './co-experience-reports-carousel.component';

describe('CoExperienceReportsCarouselComponent', () => {
  let component: CoExperienceReportsCarouselComponent;
  let fixture: ComponentFixture<CoExperienceReportsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoExperienceReportsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoExperienceReportsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
