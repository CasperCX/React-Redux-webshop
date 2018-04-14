import { FETCH_DATA } from './types';
import axios from 'axios';

export const getData = () => async dispatch => {
        const res = await axios.get('/api/fetch');
        dispatch({ type: FETCH_DATA, payload: res.data });
};