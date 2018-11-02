import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationTitleComponent } from './co-registration-title.component';

describe('CoRegistrationTitleComponent', () => {
  let component: CoRegistrationTitleComponent;
  let fixture: ComponentFixture<CoRegistrationTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
