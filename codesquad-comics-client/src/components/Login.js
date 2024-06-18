import React from 'react'

import { useState } from "react";


const Login = () => {

    const submitLogin  = (e) => {
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


    // const navigate = useNavigate();

    // const handleSubmit  = (e) => {
    //     e.preventDefault();
    //     const body = {
    //         username: e.target.username.value,
    //         password: e.target.password.value
    //     }
    //     fetch("http://localhost:8080/login/local", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(body),
    //         })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error ("Network response was not ok");
    //             }
    //                 return response.json();
    //             })
    //                 .then((result) => {
    //                     console.log("login successful");
    //                     localStorage.setItem("user", JSON.stringify(result.data));
    //                     setUser(result.data);
    //                     navigate("/admin");
    //                     })
    //                     .catch((error) => {
    //                         console.error("Login error:", error);
    //             });
    //         };


    
    return (
      <div>
            <div className="loginpage">
        <div>     
            <h1> 
                LOGIN
            </h1>
        </div>

        <div> 
            <form action="#" onSubmit={submitLogin}>

                <div className="login">
                    <div> 
                        <label for="email">Email address: </label>
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Email" required
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

  export default Login;