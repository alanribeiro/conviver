import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoAvatarComponent } from './co-avatar.component';

describe('CoAvatarComponent', () => {
  let component: CoAvatarComponent;
  let fixture: ComponentFixture<CoAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
