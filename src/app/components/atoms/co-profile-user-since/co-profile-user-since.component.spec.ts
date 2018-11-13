import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoProfileUserSinceComponent } from './co-profile-user-since.component';

describe('CoProfileUserSinceComponent', () => {
  let component: CoProfileUserSinceComponent;
  let fixture: ComponentFixture<CoProfileUserSinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoProfileUserSinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoProfileUserSinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
