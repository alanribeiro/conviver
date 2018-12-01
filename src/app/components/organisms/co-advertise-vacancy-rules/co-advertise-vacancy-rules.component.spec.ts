import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyRulesComponent } from './co-advertise-vacancy-rules.component';

describe('CoAdvertiseVacancyRulesComponent', () => {
  let component: CoAdvertiseVacancyRulesComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
