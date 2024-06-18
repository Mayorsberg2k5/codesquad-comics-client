import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = ({user, setUser}) => {
    const navigate = useNavigate();


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
    fetch("http://localhost:8080/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error ("Network response was not ok");
            }
                return response.json();
            })
                .then((result) => {
                    console.log("signup successful");
                    localStorage.setItem("user", JSON.stringify(result.data));
                    setUser(result.data);
                    navigate("/admin");
                    })
                    .catch((error) => {
                        console.error("Singup error:", error);
            });
        };



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