import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyRoomsComponent } from './co-advertise-vacancy-rooms.component';

describe('CoAdvertiseVacancyRoomsComponent', () => {
  let component: CoAdvertiseVacancyRoomsComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
