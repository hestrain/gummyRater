import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { userName, email, password }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username</label>
          <input
            type="string"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="string"
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="string"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account? <a href="">Login</a>
      </p>
    </div>
  );
}
