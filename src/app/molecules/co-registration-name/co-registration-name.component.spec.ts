import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationNameComponent } from './co-registration-name.component';

describe('CoRegistrationNameComponent', () => {
  let component: CoRegistrationNameComponent;
  let fixture: ComponentFixture<CoRegistrationNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
