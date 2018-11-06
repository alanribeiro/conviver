import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterAgeComponent } from './co-register-age.component';

describe('CoRegistrationAgeComponent', () => {
  let component: CoRegisterAgeComponent;
  let fixture: ComponentFixture<CoRegisterAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
