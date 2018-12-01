import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoResidentsListComponent } from './co-residents-list.component';

describe('CoResidentsListComponent', () => {
  let component: CoResidentsListComponent;
  let fixture: ComponentFixture<CoResidentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoResidentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoResidentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
