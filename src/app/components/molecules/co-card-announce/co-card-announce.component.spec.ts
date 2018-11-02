import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCardAnnounceComponent } from './co-card-announce.component';

describe('CoCardAnnounceComponent', () => {
  let component: CoCardAnnounceComponent;
  let fixture: ComponentFixture<CoCardAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCardAnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCardAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
