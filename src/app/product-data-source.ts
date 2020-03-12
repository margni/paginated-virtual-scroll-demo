import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

export class ProductDataSource extends DataSource<Product> {
    private products = new BehaviorSubject<Product[]>([]);
    private subscription = new Subscription();

    constructor(private productService: ProductService) {
        super();
    }

    connect(collectionViewer: CollectionViewer) {
        this.productService.fetch().subscribe((products) => this.products.next(products));

        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            if (range.end < this.products.getValue().length) {
                return;
            }

            this.productService.fetch(range.end).subscribe((products) => this.products.next(this.products.getValue().concat(products)));
        }));

        return this.products;
    }

    disconnect(collectionViewer: CollectionViewer) {
        this.subscription.unsubscribe();
    }
}
