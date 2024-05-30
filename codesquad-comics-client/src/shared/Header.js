import React from 'react'

const Header = () => {
    return (
      <div>
        <header>
            <nav>
                <a href="#"> 
                    <img src="./public/images/CodeSquad-Comics-logo.png" alt="CodeSquad-Comics-logo"/>
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