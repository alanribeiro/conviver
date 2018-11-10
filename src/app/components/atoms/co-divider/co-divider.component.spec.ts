import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoDividerComponent } from './co-divider.component';

describe('CoDividerComponent', () => {
  let component: CoDividerComponent;
  let fixture: ComponentFixture<CoDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
