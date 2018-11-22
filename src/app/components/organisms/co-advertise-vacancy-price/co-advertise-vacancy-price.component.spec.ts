import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyPriceComponent } from './co-advertise-vacancy-price.component';

describe('CoAdvertiseVacancyPriceComponent', () => {
  let component: CoAdvertiseVacancyPriceComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
