import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoRulesListComponent } from './co-rules-list.component';

describe('CoRulesListComponent', () => {
  let component: CoRulesListComponent;
  let fixture: ComponentFixture<CoRulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoRulesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoRulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
