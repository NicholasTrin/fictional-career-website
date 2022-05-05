import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../actions"


import Header from './Header';
const Landing = () => <h2>Landing</h2>;

function App() {
  GlobalDispatchers()
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Header/>}/>
          <Route exact path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function GlobalDispatchers(){
  const dispatch = useDispatch();
  dispatch(actions.fetchUser())
}

export default App;