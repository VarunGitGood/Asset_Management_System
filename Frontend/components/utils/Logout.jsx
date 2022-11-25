import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import lgs from '../style/Logout.module.css'

function Logout() {
    const auth = useContext(AuthContext)
    const nav = useNavigate();
    const handleClick = () => {
        auth.logout()
        nav("/");
    }
  return (
    <Button className={lgs.b} variant="contained" color="primary" onClick={handleClick}>Logout</Button>
  )
}

export default Logout