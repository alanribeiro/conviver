import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoLoadingComponent } from './co-loading.component';

describe('CoLoadingComponent', () => {
  let component: CoLoadingComponent;
  let fixture: ComponentFixture<CoLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
