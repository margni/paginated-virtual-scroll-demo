import {inject, TestBed} from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpClient;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetch()', () => {
    it('should fetch', inject([HttpTestingController], (httpTestingController) => {
      const products = [{test: 'test'}];

      service.fetch().subscribe((result) => {
        expect(result).toBeDefined();
      });

      const req = httpTestingController.expectOne('assets/products.json');

      req.flush({products});
    }));
  });
});
