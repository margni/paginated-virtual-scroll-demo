import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  fetch(offset = 0) {
    return this.httpClient.get<{products: Product[]}>('assets/products.json')
      .pipe(map(result => result.products))
      // Virtualize pagination by returning only 10 items from the offset.
      .pipe(map(products => products.slice(offset, offset + 10)));
  }
}
