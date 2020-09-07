import { Component } from '@angular/core';

import { ProductDataSource } from '../product-data-source';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public productDataSource: ProductDataSource;

  constructor(productService: ProductService) {
    this.productDataSource = new ProductDataSource(productService);
  }
}
