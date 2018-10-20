import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPagingButtonsComponent } from './co-paging-buttons.component';

describe('CoPagingButtonsComponent', () => {
  let component: CoPagingButtonsComponent;
  let fixture: ComponentFixture<CoPagingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoPagingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPagingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
