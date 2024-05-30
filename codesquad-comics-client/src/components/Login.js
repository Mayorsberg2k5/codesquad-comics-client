import React from 'react'

const Login = () => {
    return (
      <div>
            <div className="loginpage">
        <div>     
            <h1> 
                LOGIN
            </h1>
        </div>

        <div> 
            <form action="#">

                <div className="login">
                    <div> 
                        <label for="email">Email address:</label>
                        <input type="text" id="email" name="email" placeholder="Email" required/><br/>
                    </div> <br/>

                    <div> 
                        <label for="passsword">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" required/>
                    </div> <br/>
                </div>
                
                <div className="submit">
                <input type="submit" value="Submit"/>
                </div>

            </form>
        </div>
    </div>
      </div>
    )
  }

  export default Login;