import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoIllustrationItemListComponent } from './co-illustration-item-list.component';

describe('CoIllustrationItemListComponent', () => {
  let component: CoIllustrationItemListComponent;
  let fixture: ComponentFixture<CoIllustrationItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoIllustrationItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoIllustrationItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
