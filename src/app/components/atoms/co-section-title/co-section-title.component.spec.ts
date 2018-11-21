import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSectionTitleComponent } from './co-section-title.component';

describe('CoSectionTitleComponent', () => {
  let component: CoSectionTitleComponent;
  let fixture: ComponentFixture<CoSectionTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSectionTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
