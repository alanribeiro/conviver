import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSelectComponent } from './co-select.component';

describe('CoSelectComponent', () => {
  let component: CoSelectComponent;
  let fixture: ComponentFixture<CoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
