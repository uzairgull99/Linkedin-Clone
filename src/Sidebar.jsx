import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="upper-part">
        <img src="" alt="" />
        <Avatar src=" "></Avatar>
        <h3>Uzair gull</h3>
        <h4>UET | Software Engineer</h4>
        </div>

        <div className="lower-part">
        <div><p>Who's viewed your Profile</p>
        <p>100</p>
        </div>
        <div>
        <p>Connections</p>
        <p>540</p>
        </div>
        </div>

        </div>
       
  )
}

export default Sidebar