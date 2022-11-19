import React, { useContext, useState } from 'react'
import styles from "../../style/login.css"
import Login from './Login'
import Register from './Register'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';


function Landing() {
    const [flag , setFlag] = useState(true);
    const auth = useContext(AuthContext)
    const flagHandler = () => {
        setFlag(!flag);
    }
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg3"></div>
      <div className="bg bg2"></div>
      <div className="content">
        {auth.loggedin ? (<Navigate to="/dashboard" replace/>) : (flag ? <Login onFlag={flagHandler}/> : <Register onFlag={flagHandler}/>)}
        
      </div>
    </div>
  )
}

export default Landing