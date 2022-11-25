import React, { useState } from "react";
import { app } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import Nav from "./Nav";
import './styles/ProfileScreen.css'
import PlansScreen from "./PlansScreen";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
        

function ProfileScreen (){
    // const user= "Dummy bhava";
    
    const [plan,setPlan]=useState("")
    const getPlan= (data) =>{
        console.log("Dara",data)
        setPlan(data)
    }

    const auth=getAuth();
    const user=auth.currentUser;
    console.log("user",user);
    return(
        <div className="profileScreen">
        <Nav/>
        <div className="profileScreen_body">
            <h1>Edit profile</h1>
            <div className="profileScreen_info">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                alt=""/>
            
            <div className="profileScreen_details">
                <h2>{user}</h2>
                <div className="profileScreen_plans">
                <h3>Plans(Current Plan: {plan} )</h3>
                <PlansScreen Plan={getPlan} />
                <button onClick={()=> auth.signOut()} className="profileScreen_signout">Sign Out</button>
                </div>
                </div>
               </div>
        </div>
        </div>
    )
}
export default ProfileScreen;