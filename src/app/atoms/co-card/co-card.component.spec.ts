import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCardComponent } from './co-card.component';

describe('CoCardComponent', () => {
  let component: CoCardComponent;
  let fixture: ComponentFixture<CoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
