import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPageTitleComponent } from './co-page-title.component';

describe('CoPageTitleComponent', () => {
  let component: CoPageTitleComponent;
  let fixture: ComponentFixture<CoPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
