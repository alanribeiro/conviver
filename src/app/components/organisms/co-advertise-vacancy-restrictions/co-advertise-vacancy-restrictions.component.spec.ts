import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyRestrictionsComponent } from './co-advertise-vacancy-restrictions.component';

describe('CoAdvertiseVacancyRestrictionsComponent', () => {
  let component: CoAdvertiseVacancyRestrictionsComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyRestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyRestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyRestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
