import React from 'react'
import { useState } from "react";


const Signup = () => {

    const submitSignup  = (e) => {
        e.preventDefault();
        console.log(e.target.value);

        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value,
    };

    console.log(body);
}

    return (
      <div>
            <div className="loginpage">
        <div>     
            <h1> 
                Signup
            </h1>
        </div>

        <div> 
            <form action="#" onSubmit={submitSignup}>

                <div className="login">
                    <div> 
                        <label for="firstName">First Name: </label>
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email" required
                        /><br/>
                    
                    </div> <br/>

                    <div> 
                        <label for="lastName">Last Name: </label>
                        <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Last Name" required
                        />
                        
                    </div> <br/>

                    <div> 
                        <label for="username">Username: </label>
                        <input 
                        type="text" 
                        id="Username" 
                        name="Username" 
                        placeholder="Username" required
                        /><br/>
                    
                    </div> <br/>

                    <div> 
                        <label for="password">Password: </label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" required
                        />
                        
                    </div> <br/>

                </div>
                
                <div className="submit">
                <input 
                type="submit" 
                value="Submit"
                />
                </div>

            </form>
        </div>
    </div>
      </div>
    )
  }

  export default Signup;