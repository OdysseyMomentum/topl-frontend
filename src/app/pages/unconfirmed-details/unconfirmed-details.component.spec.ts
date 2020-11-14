import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedDetailsComponent } from './unconfirmed-details.component';

describe('TransactionDetailsComponent', () => {
  let component: UnconfirmedDetailsComponent;
  let fixture: ComponentFixture<UnconfirmedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
