import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationPrefsComponent } from './co-registration-prefs.component';

describe('CoRegistrationPrefsComponent', () => {
  let component: CoRegistrationPrefsComponent;
  let fixture: ComponentFixture<CoRegistrationPrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationPrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
