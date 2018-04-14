import { ADD_CART } from '../actions/types';
const INIT = { items_count: 0,
                items_: [] };

export default function(state = INIT, action ) {
    switch (action.type) {
        case ADD_CART:
           return {...state, items_: [...state.items_, action.payload] };
        default:
            return state;
    } 

  
};