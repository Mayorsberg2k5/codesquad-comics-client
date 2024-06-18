import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
  fetch("http://localhost:8080/logout", {
    method: "GET",
    headers: {
      "Random": "random for now",
    },
  })
  .then((response) => response.json())
  .then(() =>{
    console.log("Successfully logged out");
    setUser({});
    localStorage.removeItem("user");
    navigate("/")
    })
    .catch((error) => {
      console.log(error);
      navigate("admin");
    })



    {user.username ? (
       <Link 
       to="/admin">
       </Link>
    ) : (
      <Link to="/login"></Link>
    )}

}
    return (
      <div>
        <header user={user} setUser={setUser}>
            <nav>
                <a href="#"> 
                    <img src="./images/CodeSquad-Comics-logo.png" alt="CodeSquad-Comics-logo"/>
                </a>
                <button class="hamburgerbutton" > 
                        <i class="fa fa-bars"></i>
                </button>
                <ul>
                    <li> <Link to="/">HOME</Link></li>
                    <li> <Link to="/about">ABOUT</Link></li>
                    <li> <Link to="/login">LOGIN</Link></li>
                    <a href="#" onClick={handleLogout}>LOGOUT</a>
                </ul>
            </nav>
        </header>
      </div>

      
    )
  }

  export default Header;