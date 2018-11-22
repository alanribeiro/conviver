import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyLocationComponent } from './co-advertise-vacancy-location.component';

describe('CoAdvertiseVacancyLocationComponent', () => {
  let component: CoAdvertiseVacancyLocationComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
