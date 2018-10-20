import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoEstablishmentItemComponent } from './co-establishment-item.component';

describe('CoEstablishmentItemComponent', () => {
  let component: CoEstablishmentItemComponent;
  let fixture: ComponentFixture<CoEstablishmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoEstablishmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoEstablishmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
