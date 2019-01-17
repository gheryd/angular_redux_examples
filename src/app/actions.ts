import { IAppState } from './store';
import { NgRedux } from 'ng2-redux';
import { ProductI } from './models/product';
import { Injectable } from '@angular/core';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const PRODUCT_REMOVE = "PRODUCT_REMOVE";
export const PRODUCT_SET_LIST = "PRODUCT_SET_LIST"
export const LOG_MESSAGE_SET = "LOG_MESSAGE"

@Injectable()
export class AppAction{
    constructor(private ngRedux: NgRedux<IAppState>){
        
    }

    increment = () => {
        this.dispatch({type: INCREMENT})
        this.log("increment counter");
    }
    
    decrement = () => {
        this.dispatch({type: DECREMENT})
        this.log("decrement counter");
    }
    
    reset = () => {
        this.dispatch({type: RESET})
        this.log("reset counter");
    }
    
    removeProduct(product:ProductI){
        this.dispatch({type:PRODUCT_REMOVE, product:product})
        this.log("remove product: "+product.name);
    }
    
    setProducts(products:ProductI[]){
        this.dispatch({type:PRODUCT_SET_LIST, products:products})
        this.log("set products");
    }
    
    log(msg:string){
        this.dispatch({type:LOG_MESSAGE_SET, message:msg})
    }
    
    private dispatch(action){
        this.ngRedux.dispatch(action);
    }
}

