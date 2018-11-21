import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoProfileUserNameComponent } from './co-profile-user-name.component';

describe('ProfileUserNameComponent', () => {
  let component: CoProfileUserNameComponent;
  let fixture: ComponentFixture<CoProfileUserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoProfileUserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoProfileUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
