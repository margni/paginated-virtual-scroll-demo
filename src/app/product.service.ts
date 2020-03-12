import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  fetch(offset = 0) {
    return this.httpClient.get<{products: Product[]}>('assets/products.json')
      .pipe(map((result) => result.products))
      .pipe(map((products) => products.slice(offset, offset + 10)));
  }
}
