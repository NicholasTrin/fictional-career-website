import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from './Header';
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
  <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' Component={Landing}/>
        </Routes>
      </BrowserRouter>
    </div>
*/
