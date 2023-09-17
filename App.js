import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import img from './img';
import name from './name';
import age from './age';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <div id="intro">
        <Routes>
          <Route path='/' element={<home />} />
          <Route path="/img" element={<img />} />
          <Route path="/name" element={<name />} />
          <Route path="/age" element={<age />} />
        </Routes>
      </div>
   </BrowserRouter>
   
  );
}

export default App;
