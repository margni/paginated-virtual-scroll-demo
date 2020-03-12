import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import {ProductService} from '../product.service';
import {Component} from '@angular/core';

describe('ProductsComponent', () => {
  @Component({selector: 'cdk-virtual-scroll-viewport', template: ''})
  class VirtualScrollViewportComponent {}

  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, VirtualScrollViewportComponent ],
      providers: [
        {provide: ProductService, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
