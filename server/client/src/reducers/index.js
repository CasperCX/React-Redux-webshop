import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    cart: cartReducer
});