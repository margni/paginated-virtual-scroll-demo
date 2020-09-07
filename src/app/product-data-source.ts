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
        // Connecting instantly triggers loading the first page of items.
        this.productService.fetch().subscribe((products) => this.products.next(products));

        this.subscription.add(collectionViewer.viewChange.subscribe(range => {
            // Do not load any additional items if the requested range ends
            // before the end of existing items list.
            if (range.end < this.products.getValue().length) {
                return;
            }

            // Fetch next page of items and send to observers.
            this.productService.fetch(range.end).subscribe((products) => this.products.next(this.products.getValue().concat(products)));
        }));

        return this.products;
    }

    disconnect(collectionViewer: CollectionViewer) {
        this.subscription.unsubscribe();
    }
}
