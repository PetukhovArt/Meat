import React from 'react';
import c from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from 'react-router-dom';


export const Header = (props: any) => {

    return <div className={c.header}>
        <img src={logo} alt="logo"/>
        <div className={c.loginBlock}>
            <NavLink  className={c.loginLink} to="/login">Login</NavLink>
        </div>
    </div>
}
