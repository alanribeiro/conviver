import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyResidentsComponent } from './co-advertise-vacancy-residents.component';

describe('CoAdvertiseVacancyResidentsComponent', () => {
  let component: CoAdvertiseVacancyResidentsComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyResidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyResidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
