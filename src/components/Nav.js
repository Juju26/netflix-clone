import React, { useEffect, useState } from "react";
import './styles/Nav.css'
import logo from './imgs/netflix logo.png'
function Nav(){

    const [show,handleShow]=useState(false)

    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }


    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return ()=> window.removeEventListener("scroll",transitionNavbar)

    },[])

    return(
<div className={`nav ${show && 'nav_black'}`}>

    <div className="nav_contents">
    <img className="nav_logo" 
    src={logo} alt="kanom" />

    <img className="nav_avatar" 
    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""/>


    </div>

    
</div>
    )
}
export default Nav