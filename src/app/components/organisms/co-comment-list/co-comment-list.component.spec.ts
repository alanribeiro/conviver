import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCommentListComponent } from './co-comment-list.component';

describe('CoCommentListComponent', () => {
  let component: CoCommentListComponent;
  let fixture: ComponentFixture<CoCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
