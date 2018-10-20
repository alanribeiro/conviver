import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoEstablishmentItemListComponent } from './co-establishment-item-list.component';

describe('CoEstablishmentItemListComponent', () => {
  let component: CoEstablishmentItemListComponent;
  let fixture: ComponentFixture<CoEstablishmentItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoEstablishmentItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoEstablishmentItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
