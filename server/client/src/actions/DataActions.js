import { FETCH_DATA } from './types';
import axios from 'axios';

export const getData = () => async (dispatch) => {
        const res = await axios.get('/api/fetch');
        console.log("data fetched: ", res.data.results);
        dispatch({ type: FETCH_DATA, payload: res.data.results });
};