import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertiseVacancyPhotosComponent } from './co-advertise-vacancy-photos.component';

describe('CoAdvertiseVacancyPhotosComponent', () => {
  let component: CoAdvertiseVacancyPhotosComponent;
  let fixture: ComponentFixture<CoAdvertiseVacancyPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertiseVacancyPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertiseVacancyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
