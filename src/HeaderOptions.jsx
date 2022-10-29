import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({Avatar,title,Icon}) {
  return (
    <div className="headerOptions">
        {/* <Icon></Icon>
        <h3>{title}</h3> */}
        {/* OR */}
        {Icon && <Icon/>}
        {Avatar && <Avatar className="avatar-style" src={require("./linkedin.png")} />}
        <h4>{title}</h4>   
    </div>
  )
}

export default HeaderOptions