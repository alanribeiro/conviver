import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyPropertyTypeComponent } from './co-advertise-vacancy-property-type.component';

describe('CoAdvertiseVacancyPropertyTypeComponent', () => {
  let component: CoAdvertiseVacancyPropertyTypeComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyPropertyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyPropertyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyPropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
