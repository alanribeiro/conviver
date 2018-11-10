import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementThumbnailComponent } from './co-advertisement-thumbnail.component';

describe('CoAdvertisementThumbnailComponent', () => {
  let component: CoAdvertisementThumbnailComponent;
  let fixture: ComponentFixture<CoAdvertisementThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
