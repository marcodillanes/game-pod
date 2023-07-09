import React from 'react'
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import myImage from './Images/Logo.png';
 

const HomePage = () => {
  let navigate = useNavigate();

  function signOut() {
    window.localStorage.removeItem("isLoggedIn")
  }

  return (
    <div>
       <img src={myImage} alt="Logo" />
        <h1>Game Pod</h1>
          <h2>First Edition</h2>
            <div className="Game-Menu-Container">
              <div className="Game-Menu">
                <button className="Game1-btn">Game 1</button>
                <button className="Game2-btn">Game 2</button>
                <button className="Game3-btn">Game 3</button>
              </div>
              <div className="Options">
                <button onClick={() => {navigate('/SignUp')}} className="SignUp-btn">SIGN UP</button>
                <button onClick={() => {navigate('/')}} className="SignIn-btn">SIGN IN</button>
              </div>
            </div>
    </div>
  );
}

export default HomePage;
