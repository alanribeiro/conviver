import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoIconComponent } from './co-icon.component';

describe('CoIconComponent', () => {
  let component: CoIconComponent;
  let fixture: ComponentFixture<CoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
