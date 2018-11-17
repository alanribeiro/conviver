import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCommentComponent } from './co-comment.component';

describe('CoCommentComponent', () => {
  let component: CoCommentComponent;
  let fixture: ComponentFixture<CoCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
