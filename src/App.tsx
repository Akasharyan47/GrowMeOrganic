import React,{useEffect} from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import Home from './Component/Home/Home'; 
import Page1 from "./Component/Page1/Page1";

const App: React.FC = () => { 
  useEffect(() =>{
    localStorage.removeItem("formData");
  })
  return ( 
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />   
        </Routes>
      </BrowserRouter> 
    </div>

  );
};

export default App;
