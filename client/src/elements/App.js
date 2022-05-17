import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../actions"


import Header from './Header';
import Landing from './Landing';
import Blog from './Blogs/Blog';
import ViewBlogs from './Blogs/ViewBlogs';
import CreateBlog from './Blogs/CreateBlog';
import ViewBlog from './Blogs/ViewBlog';

function App() {
  GlobalDispatchers()
  return (
    <div className="container">
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/blog/view_blogs' element={<ViewBlogs />} />
          <Route exact path='/blog/create_blog' element={<CreateBlog />} />
          <Route exact path='/blog/view_blogs/*' element={<ViewBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


function GlobalDispatchers(){
  const dispatch = useDispatch();
  dispatch(actions.fetchUser())
  dispatch(actions.fetchBlogs())
}

export default App;