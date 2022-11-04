import React, { useState } from 'react'
import "../../style/login.css";
import Login from '../auth/Login'
import Register from '../auth/Register'

function Landing() {
    const [flag , setFlag] = useState(true);

    const flagHandler = () => {
        setFlag(!flag);
    }
  return (
    <div>
        <div className="bg"></div>
      <div className="bg bg3"></div>
      <div className="bg bg2"></div>
      <div className="content">
        {flag ? <Login onFlag={flagHandler}/> : <Register onFlag={flagHandler}/>}
      </div>
    </div>
  )
}

export default Landing