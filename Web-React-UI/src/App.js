import React from 'react';
import './App.css';
import './results.css';
import Home from "./Home";
import Login from "./Views/Login";
import Products from './Views/Products';
import Users from "./Views/Users";
import Profiled from "./Views/Profiled";
import Players from "./Views/Players";
import About from "./Views/About";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistry from './Views/UserRegistry';


function App() {
  
      return(
         
      <BrowserRouter>
 
            <Routes>
               <Route exact path="/" element={<Login/>} />
               <Route  path='/Timeline' element={<Home/>} />
               <Route path='/Products' element={<Products/>}/>
               <Route  path='/UserRegistry' element={<UserRegistry/>} />
               <Route  path="/Users" element={<Users/>} />
               <Route  path="/Profiled/:id" element={<Profiled/>} />
               <Route  path="/Players" element={<Players/>} />
               <Route path='/About' element={<About />} />
               
            </Routes>
            
      </BrowserRouter>
   

         
         
      );     
     
}

export default App;
