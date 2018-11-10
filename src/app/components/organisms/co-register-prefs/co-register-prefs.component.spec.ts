import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterPrefsComponent } from './co-register-prefs.component';

describe('CoRegisterPrefsComponent', () => {
  let component: CoRegisterPrefsComponent;
  let fixture: ComponentFixture<CoRegisterPrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterPrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterPrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
