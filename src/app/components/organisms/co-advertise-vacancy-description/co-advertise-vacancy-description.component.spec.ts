import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyDescriptionComponent } from './co-advertise-vacancy-description.component';

describe('CoAdvertiseVacancyDescriptionComponent', () => {
  let component: CoAdvertiseVacancyDescriptionComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
