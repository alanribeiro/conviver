import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoInsigniaComponent } from './co-insignia.component';

describe('CoInsigniaComponent', () => {
  let component: CoInsigniaComponent;
  let fixture: ComponentFixture<CoInsigniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoInsigniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoInsigniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
