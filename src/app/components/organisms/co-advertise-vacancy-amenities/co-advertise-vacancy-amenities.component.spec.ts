import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyAmenitiesComponent } from './co-advertise-vacancy-amenities.component';

describe('CoAdvertiseVacancyAmenitiesComponent', () => {
  let component: CoAdvertiseVacancyAmenitiesComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
