import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Logout() {
    const auth = useContext(AuthContext)
    const nav = useNavigate();
    const handleClick = () => {
        auth.logout()
        nav("/");
    }
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>Logout</Button>
  )
}

export default Logout