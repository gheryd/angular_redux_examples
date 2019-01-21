import { Injectable } from '@angular/core';
import { ProductI } from '../models/product';
import { of, Observable, fromEventPattern } from 'rxjs';
import {delay, map} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private products: ProductI[] = [
        {name: 'product A', id: 1, description: 'description product A'},
        {name: 'product B', id: 2, description: 'description product B'},
        {name: 'product C', id: 3, description: 'description product C'},
        {name: 'product D', id: 4, description: 'description product D'}
    ];

    getProducts(): Observable<ProductI[]> {
        return of(this.products).pipe(delay(2000));
    }

    getProductById(id: number): Observable<ProductI> {
        return of( this.products.find((p) => p.id == id) ).pipe(delay(2000));
    }

}
