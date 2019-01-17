import { ProductI } from './../models/product';
import {Component, Input, Output, EventEmitter} from '@angular/core'
import { AppAction } from '../actions';
import { ProductsService } from '../services/products.service';
import {select} from 'ng2-redux'

@Component({
    selector: 'products',
    templateUrl: "./products.html"
})
export class ProductsComponent {
    title:string = "List of Products";
    @select()products:ProductI[];
    @Output() removeProduct = new EventEmitter()

    constructor(private appAction:AppAction, private service:ProductsService){
        this.loadProducts();
    }

    loadProducts(){
        this.appAction.setProducts(this.service.getProducts());
    }

    onProductRemove(product){
        this.appAction.removeProduct(product);
    }

}