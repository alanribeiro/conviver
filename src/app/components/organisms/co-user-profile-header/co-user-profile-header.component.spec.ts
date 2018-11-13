import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUserProfileHeaderComponent } from './co-user-profile-header.component';

describe('UserProfileHeaderComponent', () => {
  let component: CoUserProfileHeaderComponent;
  let fixture: ComponentFixture<CoUserProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoUserProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoUserProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
