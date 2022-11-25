import React from 'react'
import pc from '../style/ProfileCard.module.css'
import { Avatar } from '@mui/material'
export default function ProfileCard() {
  return (
    <div >
        <div className={pc.card}>
            <div className={pc.av}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }}/></div>
            
            <h1>John Doe</h1>

            <p>CEO at Company</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quas.
            </p>
            <p>
                <button>Contact</button>
                <button>Message</button>
            </p>

        </div>

    </div>
  )
}
