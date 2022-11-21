import React, { useState } from "react";
import './styles/LoginScreen.css';
import logo from './imgs/netflix logo.png'
import SignUpScreen from "./SignUpScreen";

function LoginScreen(){

    const [signIn,setSignIn]=useState(false)
    
    return(
        <div className="loginScreen">
            <div className="loginScreen_background">  
                <img className="loginScreen_logo" src={logo} alt="logo missing" />
                <button
                 onClick={() => setSignIn(true)}
                className="loginScreen_button">Sign In</button>
            
            <div className="loginScreen_gradient"/>
            </div>

            <div className="loginScreen_body">

                {
                    signIn? 
                        (<SignUpScreen/>
                    ) :

                    (
                        <>
                        <h1>
                          Unlimited movies on the go
                        </h1>
                        <h2>
                          watch anywhere cancel anytime
                        </h2>
      
                        <h3>
                          Ready to watch? Enter your email to start
                        </h3>
      
                        <div className="loginScreen_input">
                          <form>
                              <input type='email' placeholder="Email Address" />
                              <button 
                              onClick={() => setSignIn(true)}
                              className="getStarted">GetStarted</button>
                          </form>
                        </div>
                      </>
                    )
                }
               
            </div>

        </div>
    )
}
export default LoginScreen