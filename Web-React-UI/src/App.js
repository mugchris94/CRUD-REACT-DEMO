import './App.css';
import './results.css';
import Home from "./Home";
import Users from "./Views/Users";
import Profiled from "./Views/Profiled";
import Players from "./Views/Players";
import {BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  
      return(
         
      <BrowserRouter>
 
            <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route  path="/Users" element={<Users/>}/>
               <Route  path="/Profiled/:id" element={<Profiled/>}/>
               <Route path="/Players" element={<Players/>}/>
            </Routes>
      </BrowserRouter>
   

         
         
      );     
     
}

export default App;
