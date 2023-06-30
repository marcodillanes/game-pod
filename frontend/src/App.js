import React from "react";
import SignIn from "./components/signin/SignIn.js";
import { SignUp } from "./components/signup/SignUp.jsx";
import { BrowserRouter, Routers, Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignIn/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
  </Routes>
 
 
 </BrowserRouter>
  )
}

export default App;

// {/* <div>
 
// <SignIn />

// <SignUp/>

// </div> */}
