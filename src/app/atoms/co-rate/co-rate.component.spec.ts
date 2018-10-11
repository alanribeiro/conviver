import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRateComponent } from './co-rate.component';

describe('CoRateComponent', () => {
  let component: CoRateComponent;
  let fixture: ComponentFixture<CoRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
