import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterAccountComponent } from './co-register-account.component';

describe('CoRegistrationAccountComponent', () => {
  let component: CoRegisterAccountComponent;
  let fixture: ComponentFixture<CoRegisterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
