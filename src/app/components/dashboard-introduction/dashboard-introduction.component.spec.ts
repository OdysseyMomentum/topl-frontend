import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntroductionComponent } from './dashboard-introduction.component';

describe('DashboardIntroductionComponent', () => {
  let component: DashboardIntroductionComponent;
  let fixture: ComponentFixture<DashboardIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
