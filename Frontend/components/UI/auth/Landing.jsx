import React, { useContext, useState } from 'react'
import styles from "../../style/login.css"
import Login from './Login'
import Register from './Register'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Landing() {
    const [flag , setFlag] = useState(true);
    const auth = useContext(AuthContext)
    const flagHandler = () => {
        setFlag(!flag);
    }

    function onError() {
      toast.error('Invalid Credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }


  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg3"></div>
      <div className="bg bg2"></div>
      <div className="content">
        {auth.loggedin ? (<Navigate to="/dashboard" replace/>) : (flag ? <Login onFlag={flagHandler} onErr={onError}/> : <Register onFlag={flagHandler}/>)}

      </div>
      <ToastContainer />
    </div>
  )
}

export default Landing