import {FETCH_USER} from './types';
import axios from 'axios';

//getState arg for current state data if required
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: res.data})
};

