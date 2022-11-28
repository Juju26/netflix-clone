import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import Homescreen from './components/Homescreen';

import './App.css';
import LoginScreen from './components/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {

  document.title="Netflix-Home"

 const [user,setUser]=useState('')
  const dispatch=useDispatch();
  const auth=getAuth()
 
  useEffect(()=>{
  //   const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      
  //     if(userAuth){
  //       //logged in
  //       dispatch(
  //         login({
  //         uid: userAuth.uid,
  //         email : userAuth.email,
  //       })
  //       );

  //     }

  //     else{
  //       //logged out
  //       dispatch(logout())
  //     }
  //   })
  //   return unsubscribe;
  // },[dispatch])
  setUser(localStorage.getItem("user"))
  if(user){
    console.log("current user")
  }

})


  return (
    <div className="app">
      <Router>
        {!user ? (
        <LoginScreen/>
        ) :
          (
          <Routes>
            <Route path='/profile' element={<ProfileScreen/>}></Route>
            <Route path="/" element={ <Homescreen/>} />
            
          </Routes>
          )
        }
        
      </Router>
    

    </div>
  );
}

export default App;
