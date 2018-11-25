import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCarouselComponent } from './co-carousel.component';

describe('CoCarouselComponent', () => {
  let component: CoCarouselComponent;
  let fixture: ComponentFixture<CoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
