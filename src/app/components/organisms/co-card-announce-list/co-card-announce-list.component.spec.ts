import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCardAnnounceListComponent } from './co-card-announce-list.component';

describe('CoCardAnnounceListComponent', () => {
  let component: CoCardAnnounceListComponent;
  let fixture: ComponentFixture<CoCardAnnounceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCardAnnounceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCardAnnounceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
