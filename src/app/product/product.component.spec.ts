import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  @Component({selector: 'app-bank-logo', template: ''})
  class BankLogoComponent {}

  @Component({selector: 'app-star-rating', template: ''})
  class StarRatingComponent {}

  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent, BankLogoComponent, StarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      bank: {
        id: 1,
        name: 'Test',
        rating: {
          reviewsLast12Months: 1,
          starsLast12Months: 1
        }
      },
      rates: {
        effective: {
          min: {
            interest: 0,
            monthlyRate: 0
          }
        }
      },
      bullets: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
