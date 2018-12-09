import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCompatibilityComponent } from './co-compatibility.component';

describe('CoCompatibilityComponent', () => {
  let component: CoCompatibilityComponent;
  let fixture: ComponentFixture<CoCompatibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCompatibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
