import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementOwnerInfoComponent } from './co-advertisement-owner-info.component';

describe('CoAdvertisementOwnerInfoComponent', () => {
  let component: CoAdvertisementOwnerInfoComponent;
  let fixture: ComponentFixture<CoAdvertisementOwnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementOwnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementOwnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
