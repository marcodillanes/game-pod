import React from "react";
import SignIn from "./components/signin/SignIn.js";

import { SignUp } from "./components/signup/SignUp.jsx"
import  HomePage from "./components/Home_Page/HomePage.jsx";
import { BrowserRouter, Routers, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/HomePage' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
