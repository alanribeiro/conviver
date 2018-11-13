import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUserProfileHeaderAvatarComponent } from './co-user-profile-header-avatar.component';

describe('UserProfileHeaderAvatarComponent', () => {
  let component: CoUserProfileHeaderAvatarComponent;
  let fixture: ComponentFixture<CoUserProfileHeaderAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoUserProfileHeaderAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoUserProfileHeaderAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
