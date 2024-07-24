import React, { useState } from "react";
import "./Login.scss";
import google from "../../assets/google1.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/Converter")
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="all-logins">
          <div className="login-google">
            <button type="button" className="google-button" onClick={handleSubmit}>
              <img src={google} alt="Google Logo" />
              <p></p>
              <span>Sign In with Google</span>
            </button>
            <p>or</p>
          </div>

          <div className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <button type="submit" className="login-button">
              Sign In
            </button>
            <a href="#">Forgot your password?</a>
          </div>
        </div>

        <div className="login-links">
          <p>
            Don't have an account?
            <a href="#">SIGN UP</a> here
          </p>
          <p>
            Want to create Business account?
            <a href="#">SIGN UP</a> here
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
