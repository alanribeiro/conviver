import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterPhotoComponent } from './co-register-photo.component';

describe('CoRegisterPhotoComponent', () => {
  let component: CoRegisterPhotoComponent;
  let fixture: ComponentFixture<CoRegisterPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
