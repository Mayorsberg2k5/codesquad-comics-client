import React from 'react'
import { useState } from "react";

const Header = ({user, setUser}) => {
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
                    <li> <a href="#">HOME</a> </li>
                    <li> <a href="#">ABOUT</a> </li>
                    <li> <a href="#">LOGIN</a> </li>
                </ul>
            </nav>
        </header>
      </div>

      
    )
  }

  export default Header;