import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMessageItemComponent } from './co-message-item.component';

describe('CoMessageItemComponent', () => {
  let component: CoMessageItemComponent;
  let fixture: ComponentFixture<CoMessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
