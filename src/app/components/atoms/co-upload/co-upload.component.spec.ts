import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoUploadComponent } from './co-upload.component';

describe('CoUploadComponent', () => {
  let component: CoUploadComponent;
  let fixture: ComponentFixture<CoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
