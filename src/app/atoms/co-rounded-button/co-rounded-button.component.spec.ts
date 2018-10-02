import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRoundedButtonComponent } from './co-rounded-button.component';

describe('CoRoundedButtonComponent', () => {
  let component: CoRoundedButtonComponent;
  let fixture: ComponentFixture<CoRoundedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRoundedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
