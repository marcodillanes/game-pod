import React from 'react'
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

 

const HomePage = () => {
        let navigate = useNavigate();

  return (
    <div>
      <img src="" alt="logo" /> {/* Insert your custom logo source */}
      <h2>First Edition</h2>
      <div className="Game-Menu-Container">
        <div className="Game-Menu">
          <button className="Game1-btn">game 1</button>
          <button className="Game2-btn">game 2</button>
          <button className="Game3-btn">Game 3</button>
        </div>
        <div className="Options">
          <button onClick={() => {navigate('/SignUp')}} className="SignUp-btn">SIGN UP</button>
          <button onClick={() => {navigate('/SignIn')}} className="SignIn-btn">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
