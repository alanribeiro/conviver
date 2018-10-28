import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegistrationPhotoComponent } from './co-registration-photo.component';

describe('CoRegistrationPhotoComponent', () => {
  let component: CoRegistrationPhotoComponent;
  let fixture: ComponentFixture<CoRegistrationPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegistrationPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegistrationPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
