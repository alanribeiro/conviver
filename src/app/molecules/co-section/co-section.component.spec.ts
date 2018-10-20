import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSectionComponent } from './co-section.component';

describe('CoSectionComponent', () => {
  let component: CoSectionComponent;
  let fixture: ComponentFixture<CoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
