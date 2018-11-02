import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPageHeaderComponent } from './co-page-header.component';

describe('CoPageHeaderComponent', () => {
  let component: CoPageHeaderComponent;
  let fixture: ComponentFixture<CoPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
