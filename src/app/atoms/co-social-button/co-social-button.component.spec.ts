import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSocialButtonComponent } from './co-social-button.component';

describe('CoSocialButtonComponent', () => {
  let component: CoSocialButtonComponent;
  let fixture: ComponentFixture<CoSocialButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSocialButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSocialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
