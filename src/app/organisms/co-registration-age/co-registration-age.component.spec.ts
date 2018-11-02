import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationAgeComponent } from './co-registration-age.component';

describe('CoRegistrationAgeComponent', () => {
  let component: CoRegistrationAgeComponent;
  let fixture: ComponentFixture<CoRegistrationAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
