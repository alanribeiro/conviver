import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementFloatCardComponent } from './co-advertisement-float-card.component';

describe('CoAdvertisementFloatCardComponent', () => {
  let component: CoAdvertisementFloatCardComponent;
  let fixture: ComponentFixture<CoAdvertisementFloatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementFloatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementFloatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
