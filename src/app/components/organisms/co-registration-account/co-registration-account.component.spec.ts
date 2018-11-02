import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationAccountComponent } from './co-registration-account.component';

describe('CoRegistrationAccountComponent', () => {
  let component: CoRegistrationAccountComponent;
  let fixture: ComponentFixture<CoRegistrationAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
