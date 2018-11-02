import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPriceComponent } from './co-price.component';

describe('CoPriceComponent', () => {
  let component: CoPriceComponent;
  let fixture: ComponentFixture<CoPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
