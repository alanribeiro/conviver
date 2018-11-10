import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCheckboxComponent } from './co-checkbox.component';

describe('CoCheckboxComponent', () => {
  let component: CoCheckboxComponent;
  let fixture: ComponentFixture<CoCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
