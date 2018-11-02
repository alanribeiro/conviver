import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoInputComponent } from './co-input.component';

describe('CoInputComponent', () => {
  let component: CoInputComponent;
  let fixture: ComponentFixture<CoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
