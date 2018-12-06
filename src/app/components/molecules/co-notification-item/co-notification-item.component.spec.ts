import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoNotificationItemComponent } from './co-notification-item.component';

describe('CoNotificationItemComponent', () => {
  let component: CoNotificationItemComponent;
  let fixture: ComponentFixture<CoNotificationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoNotificationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoNotificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
