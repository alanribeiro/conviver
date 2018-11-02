import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoButtonComponent } from './co-button.component';

describe('CoButtonComponent', () => {
  let component: CoButtonComponent;
  let fixture: ComponentFixture<CoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
