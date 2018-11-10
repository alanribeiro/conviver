import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementAdditionalInfoComponent } from './co-advertisement-additional-info.component';

describe('CoAdvertisementAdditionalInfoComponent', () => {
  let component: CoAdvertisementAdditionalInfoComponent;
  let fixture: ComponentFixture<CoAdvertisementAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
