import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSelectableItemComponent } from './co-selectable-item.component';

describe('CoSelectableItemComponent', () => {
  let component: CoSelectableItemComponent;
  let fixture: ComponentFixture<CoSelectableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSelectableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSelectableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
