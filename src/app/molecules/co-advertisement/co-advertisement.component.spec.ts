import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementComponent } from './co-advertisement.component';

describe('CoAdvertisementComponent', () => {
  let component: CoAdvertisementComponent;
  let fixture: ComponentFixture<CoAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
