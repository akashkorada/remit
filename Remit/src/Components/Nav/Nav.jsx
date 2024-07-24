import React from "react";
import logo from "../../assets/logo.svg";
import { IoIosMenu } from "react-icons/io";
import "./Nav.scss";
import { Navigate, useNavigate } from "react-router-dom";

function Nav() {

 const navigate = useNavigate()


  const handleLoginClick = () => {
    navigate("/Login")
  } 

  return (
    <div className="parentNav">
      <div className="childNav">
        <div className="leftNav">
          <div className="logo">
            <img src={logo} onClick={handleLoginClick} alt="" />
          </div>
        </div>
        <div className="rightNav">
          <div className="refer">
            <h4 className="wrapper">
              Refer a friend! <span>You'll both earn a 1000 rupees bonus</span>
            </h4>
          </div>
          <div className="loginBtn">
            <button onClick={handleLoginClick} >Login</button>
          </div>
          <div className="hamBurger">
            <IoIosMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
