import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUserProfileHeaderActionsComponent } from './co-user-profile-header-actions.component';

describe('UserProfileHeaderActionsComponent', () => {
  let component: CoUserProfileHeaderActionsComponent;
  let fixture: ComponentFixture<CoUserProfileHeaderActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoUserProfileHeaderActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoUserProfileHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
