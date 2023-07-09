import React from "react";
import SignIn from "./components/signin/SignIn.js";
import { useContext, useState} from "react";

import { SignUp } from "./components/signup/SignUp.jsx"
import  HomePage from "./components/Home_Page/HomePage.jsx";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {
  const signedIn = window.localStorage.getItem("isSignedIn")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={signedIn ? <HomePage/> : <SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/HomePage' element={<HomePage/>}></Route>
        {/* <Route path='/nameofgameone' element={<nameofgameone/>}></Route> */}
   
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
