import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmorAccountsComponent } from './customer-accounts.component';

describe('CustmorAccountsComponent', () => {
  let component: CustmorAccountsComponent;
  let fixture: ComponentFixture<CustmorAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmorAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustmorAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
