import React, {  useState } from "react";
// import Firebase from "./Firebase.js";
import './styles/SignUpScreen.css';
import { app } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function SignUpScreen(){
    
   
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const register =(e)=>{
        e.preventDefault();
        if(email==='' || password===''){
            alert("Fields cant be empty!!")
        }
        else{
        const auth=getAuth()
        createUserWithEmailAndPassword(
            auth,
            email,
            password
       
            ).then((authUser)=>{
                console.log("Done",authUser);
        }).catch((error)=>{
            
            console.log("err",error.message);
        })
    }
     }

    const signIn= (e)=>{
        e.preventDefault();
        const auth=getAuth();
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then((authUser)=>{
            console.log("Logged in as ",authUser);
        }).catch((err)=>{
            if(err.message==="Firebase: Error (auth/user-not-found)."){
                alert("Invalid email!")
            }
            if(err.message==="Firebase: Error (auth/wrong-password)."){
                alert("Invalid password!!")
            }
            alert(err.message);
        })
    }

    return(
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="email" type="email"/>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="password" type="password"/>
                <button 
                onClick={signIn}
                type="submit">Sign In</button>

                <h4> 
                    <span className="signUpScreen_gray">New to Netflix? </span> 
                    <span className="signUpScreen_form_link"
                    onClick={register}>Signup now. </span>
                    </h4>
            </form>
        </div>
    )
}

export default SignUpScreen