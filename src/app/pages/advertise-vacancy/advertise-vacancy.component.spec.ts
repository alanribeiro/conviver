import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseVacancyComponent } from './advertise-vacancy.component';

describe('AdvertiseVacancyComponent', () => {
  let component: AdvertiseVacancyComponent;
  let fixture: ComponentFixture<AdvertiseVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
