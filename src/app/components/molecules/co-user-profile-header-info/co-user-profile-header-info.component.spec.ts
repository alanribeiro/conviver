import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUserProfileHeaderInfoComponent } from './co-user-profile-header-info.component';

describe('UserProfileHeaderInfoComponent', () => {
  let component: CoUserProfileHeaderInfoComponent;
  let fixture: ComponentFixture<CoUserProfileHeaderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoUserProfileHeaderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoUserProfileHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
