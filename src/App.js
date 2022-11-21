import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import Homescreen from './components/Homescreen';

import './App.css';
import LoginScreen from './components/LoginScreen';

function App() {

  const [user,setUser]= useState(false);
  const auth=getAuth()

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //logged in

      }

      else{
        //logged out
      }
    })
    return unsubscribe;
  },[])


  return (
    <div className="app">
      <Router>
        {!user ? (
        <LoginScreen/>
        ) :
          (
          <Routes>
            <Route path="/" element={ <Homescreen/>} />
            
          </Routes>
          )
        }
        
      </Router>
    

    </div>
  );
}

export default App;
