import React from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Menu } from '@material-ui/core';
import { AccountBox, AccountBoxOutlined, Apps, AppsOutlined, ArrowDropDown, NotificationsOutlined, Settings, SettingsOutlined } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton >
                   <MenuIcon />
                </IconButton>
                <img 
                    src="https://i.ibb.co/LNkLFZc/Screen-Shot-2021-02-23-at-11-38-41-AM.png"
                    alt=''
                />
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input type='text' placeholder="Search Base"/>
                <ArrowDropDown className='header__inputCaret'/>                        
            </div>

            <div className='header__right'>
                <Settings />
                <NotificationsIcon />
                <Apps />
                <AccountBox />
                
            </div>
        </div>
    );             
}
export default Header;
