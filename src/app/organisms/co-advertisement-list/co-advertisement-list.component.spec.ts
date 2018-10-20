import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAdvertisementListComponent } from './co-advertisement-list.component';

describe('CoAdvertisementListComponent', () => {
  let component: CoAdvertisementListComponent;
  let fixture: ComponentFixture<CoAdvertisementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAdvertisementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAdvertisementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
