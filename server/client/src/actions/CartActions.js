import { ADD_CART, REMOVE } from './types';

export const addToCart = ({ cart_item }) => {
    return {
        type: ADD_CART,
        payload: cart_item
    }
};

export const removeFromCart = (cart_item) => {
    return {
        type: REMOVE,
        payload: cart_item
    }
};