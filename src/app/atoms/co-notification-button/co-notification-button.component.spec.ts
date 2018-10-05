import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNotificationButtonComponent } from './co-notification-button.component';

describe('CoNotificationButtonComponent', () => {
  let component: CoNotificationButtonComponent;
  let fixture: ComponentFixture<CoNotificationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoNotificationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNotificationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
