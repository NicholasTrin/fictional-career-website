import {FETCH_USER, FETCH_BLOGS, FETCH_BLOG} from './types';
import axios from 'axios';


//getState arg for current state data if required
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER, payload: res.data})
};

export const fetchBlogs = () => async dispatch => {
    const res = await axios.get('/api/blogs');
    dispatch({type:FETCH_BLOGS, payload: res.data})
}

export const fetchBlog = blog_id => async dispatch => {
    const res = await axios.get(`/api/blogs/${blog_id}`, blog_id);
    dispatch({type:FETCH_BLOG, payload: res.data});
}

export const submitBlog = blog_post => async dispatch => {
   await axios.post('/api/blogs', blog_post);
}