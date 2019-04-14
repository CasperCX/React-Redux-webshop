import { ADD_CART, REMOVE } from '../actions/types';
const INIT = { items: [], currency: '$' };

export default function(state = INIT, action ) {
    switch (action.type) {
        case ADD_CART:
           return {...state, items: [...state.items , action.payload] };
        case REMOVE:
            return {...state, items: state.items.filter(item => item.name !== action.payload.name)}
        default:
            return state;
    } 
};

