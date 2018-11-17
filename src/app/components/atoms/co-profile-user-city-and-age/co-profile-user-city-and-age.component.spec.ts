import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoProfileUserCityAndAgeComponent } from './co-profile-user-city-and-age.component';

describe('ProfileUserCityAndAgeComponent', () => {
  let component: CoProfileUserCityAndAgeComponent;
  let fixture: ComponentFixture<CoProfileUserCityAndAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoProfileUserCityAndAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoProfileUserCityAndAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
