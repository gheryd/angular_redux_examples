import { ProductI } from '../models/product';
import {INCREMENT, DECREMENT, RESET, PRODUCT_REMOVE, PRODUCT_SET_LIST, LOG_MESSAGE_SET} from './actions';


export interface IAppState {
    counter: number;
    messaging?: {
        newMessages: number;
    };
    products: ProductI[];
    logMessage: string;
}

export const INITIAL_STATE: IAppState = {
    counter : 0,
    messaging: {
        newMessages: 3
    },
    products: [],
    logMessage: ''
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            // return {counter: state.counter+1}
            return Object.assign({}, state, {}, {counter: state.counter + 1});
        case DECREMENT:
            if (state.counter > 0) {
                // return {counter: state.counter-1}
                return Object.assign({}, state, {}, {counter: state.counter - 1});
            }
        case RESET:
            return Object.assign({}, state,  {counter: 0});
        case PRODUCT_REMOVE:
            const products = state.products;
            const newProducts = products.filter(
                (product) => product.name != action.product.name
            );
            return Object.assign({}, state, {products: newProducts});
        case PRODUCT_SET_LIST:
            return Object.assign({}, state, {products: action.products});
        case LOG_MESSAGE_SET:
            return Object.assign({}, state, {logMessage: action.message});

    }
    return state;
}
