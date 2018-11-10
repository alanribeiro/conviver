import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterNameComponent } from './co-register-name.component';

describe('CoRegisterNameComponent', () => {
  let component: CoRegisterNameComponent;
  let fixture: ComponentFixture<CoRegisterNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
