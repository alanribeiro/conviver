import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMainHeaderComponent } from './co-main-header.component';

describe('CoMainHeaderComponent', () => {
  let component: CoMainHeaderComponent;
  let fixture: ComponentFixture<CoMainHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoMainHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
