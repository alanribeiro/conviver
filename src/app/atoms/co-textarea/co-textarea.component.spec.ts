import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTextareaComponent } from './co-textarea.component';

describe('CoTextareaComponent', () => {
  let component: CoTextareaComponent;
  let fixture: ComponentFixture<CoTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
