import { ProductI } from './../../models/product';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { AppAction } from '../../services/actions';
import { ProductsService } from '../../services/products.service';
import {select} from 'ng2-redux';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'products',
    templateUrl: './products.html'
})
export class ProductsComponent {
    title = 'List of Products';
    @select()products: ProductI[];
    @Output() removeProduct = new EventEmitter();
    nonExistentProduct: ProductI = {
        id: -1,
        name: 'non-existent product',
        description: 'non-existent product description'
    };
    loading = false;

    constructor(private appAction: AppAction, private service: ProductsService) {
        this.loadProducts();
    }

    loadProducts() {
        this.loading = true;
        this.service.getProducts().subscribe(
            (products) => {
                this.loading = false;
                this.appAction.setProducts(products);
            }
        );
    }

    onProductRemove(product) {
        this.appAction.removeProduct(product);
    }

}
