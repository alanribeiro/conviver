import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementAddressComponent } from './co-advertisement-address.component';

describe('CoAdvertisementAddressComponent', () => {
  let component: CoAdvertisementAddressComponent;
  let fixture: ComponentFixture<CoAdvertisementAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
