import { ADD_CART } from './types';

export const addToCart = ({ cart_item }) => {
    return {
        type: ADD_CART,
        payload: cart_item
    }
};