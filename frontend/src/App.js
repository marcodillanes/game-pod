import React from "react";
import SignIn from "./components/signin/SignIn.js";
import { SignUp } from "./components/signup/SignUp.jsx";
import { BrowserRouter, Routers, Router } from 'react-router-dom';


function App() {
  return (
    <div>
 
      <SignIn />

      <SignUp/>

    </div>
  );
}

export default App;
