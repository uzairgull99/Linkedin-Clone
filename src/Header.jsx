import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <header className="header">

    <div className="header-left">
        <a href="./" waprocessedanchor="true"> <img src={require("./linkedin.png")} alt=" " /></a>
        <div className="header-search-container">
            <div className="header-search">
                <SearchRoundedIcon ></SearchRoundedIcon>
                <input type="text" placeholder="Search" />
            </div>
        </div> 
    </div>

    <div className="header-right">
        <a href="./"><HeaderOptions title="Home" Icon={HomeRoundedIcon} /> </a>
        <a href="./"><HeaderOptions title="My Network" Icon={PeopleAltIcon} /> </a>
        <a href="./"><HeaderOptions title="Jobs" Icon={WorkIcon} /> </a>
        <a href="./"><HeaderOptions title="Messaging" Icon={TextsmsRoundedIcon} /></a>
        <a href="./"><HeaderOptions title="Notifications" Icon={NotificationsRoundedIcon} /></a>
        <a href="./"><HeaderOptions title="Me" Avatar={Avatar} /></a>
    </div>
     </header>
  )
}
export default Header