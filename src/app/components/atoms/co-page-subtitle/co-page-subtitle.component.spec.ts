import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPageSubtitleComponent } from './co-page-subtitle.component';

describe('CoPageSubtitleComponent', () => {
  let component: CoPageSubtitleComponent;
  let fixture: ComponentFixture<CoPageSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPageSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPageSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
