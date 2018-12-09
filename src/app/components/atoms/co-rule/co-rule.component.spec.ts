import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRuleComponent } from './co-rule.component';

describe('CoRuleComponent', () => {
  let component: CoRuleComponent;
  let fixture: ComponentFixture<CoRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
