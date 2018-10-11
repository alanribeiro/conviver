import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoIllustrationItemComponent } from './co-illustration-item.component';

describe('CoIllustrationItemComponent', () => {
  let component: CoIllustrationItemComponent;
  let fixture: ComponentFixture<CoIllustrationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoIllustrationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoIllustrationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
