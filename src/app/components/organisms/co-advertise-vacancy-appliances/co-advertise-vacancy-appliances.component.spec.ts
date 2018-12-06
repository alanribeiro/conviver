import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyAppliancesComponent } from './co-advertise-vacancy-appliances.component';

describe('CoAdvertiseVacancyAppliancesComponent', () => {
  let component: CoAdvertiseVacancyAppliancesComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
