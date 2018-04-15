import { ADD_CART, REMOVE } from '../actions/types';
const INIT = { items_count: 0,
                items_: [] };

export default function(state = INIT, action ) {
    switch (action.type) {
        case ADD_CART:
           return {...state, items_: [...state.items_ , ...action.payload] };
        case REMOVE:
            console.log("removing index:", action.payload);
            return {...state, items_: state.items_.filter(item => item !== action.payload)}
        default:
            return state;
    } 
};

