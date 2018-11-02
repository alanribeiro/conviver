import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTitleComponent } from './co-title.component';

describe('CoTitleComponent', () => {
  let component: CoTitleComponent;
  let fixture: ComponentFixture<CoTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
