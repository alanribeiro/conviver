import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDetailedPriceComponent } from './co-detailed-price.component';

describe('CoDetailedPriceComponent', () => {
  let component: CoDetailedPriceComponent;
  let fixture: ComponentFixture<CoDetailedPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDetailedPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDetailedPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
