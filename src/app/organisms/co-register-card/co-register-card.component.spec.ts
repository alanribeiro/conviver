import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRegisterCardComponent } from './co-register-card.component';

describe('CoRegisterCardComponent', () => {
  let component: CoRegisterCardComponent;
  let fixture: ComponentFixture<CoRegisterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRegisterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRegisterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
