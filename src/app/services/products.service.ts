import { Injectable } from '@angular/core';
import { ProductI } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    
    getProducts():ProductI[]{
        return [
            {name: "product A"},
            {name: "product B"}, 
            {name: "product C"}, 
            {name: "product D"}
        ] ;
    }

}