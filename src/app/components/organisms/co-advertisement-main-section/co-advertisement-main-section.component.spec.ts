import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementMainSectionComponent } from './co-advertisement-main-section.component';

describe('CoAdvertisementMainSectionComponent', () => {
  let component: CoAdvertisementMainSectionComponent;
  let fixture: ComponentFixture<CoAdvertisementMainSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementMainSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
