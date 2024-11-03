import React, { useState, } from "react";
import ReactCardFlip from "react-card-flip";


function FlipCard() {
  const [flip, setFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
      {/* login side */}
      <div className="flip-card frontStyle">
        Login
        <div className="loginForm">
          {/* username */}
          <label for="userName">Username</label>
          <input type="text" id="userName" name="userName"></input>
          {/* password */}
          <label for="password">Password</label>
          <input type="password" name="password"></input>
          {/* submit */}
          <button type="submit" className="submitbtn align-center">
            Login
          </button>
        </div>
        <button className="flipbtn" onClick={() => setFlip(!flip)}>
          Flip to Sign Up
        </button>
      </div>
      <div className="flip-card backStyle">
        Sign Up
        <div className="loginForm">
          {/* Sign Up Side */}
          {/* username */}
          <label for="userName">Username</label>
          <input type="text"  name="userName"></input>
          {/* email */}
          <label for="email">Email</label>
          <input type="email" id="email" name="email"></input>
          <br></br>
          {/* password */}
          <label for="password">Password</label>
          <input type="password" name="password"></input>
          {/* submit */}
          <button type="submit" className="submitbtn align-center">
            Sign Up
          </button>
        </div>
        <button className="flipbtn" onClick={() => setFlip(!flip)}>
          Flip to Log In
        </button>
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
