import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoLoginCardComponent } from './co-login-card.component';

describe('CoLoginCardComponent', () => {
  let component: CoLoginCardComponent;
  let fixture: ComponentFixture<CoLoginCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoLoginCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
