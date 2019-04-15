import { ADD_CART, REMOVE, CONFIRM_PURCHASE } from './types';

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

export const confirmPurchase = () => {
    return {
        type: CONFIRM_PURCHASE
    }
}