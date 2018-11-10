import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoLogoComponent } from './co-logo.component';

describe('CoIconComponent', () => {
  let component: CoLogoComponent;
  let fixture: ComponentFixture<CoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
