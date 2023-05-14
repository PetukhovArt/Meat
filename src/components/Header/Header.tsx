import React from 'react';
import c from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store-redux';


export const Header = (props: any) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const email = useSelector((state: RootState) => state.auth.email)

    return <div className={c.header}>
        <div><img src={logo} alt="logo"/></div>
        <div className={c.loginBlock}>
            { isAuth? <div className={c.userName}>{email}</div>
                : <NavLink  className={c.loginLink} to="/login">Вход в аккаунт</NavLink>
            }
            <NavLink  className={c.loginLink} to="/registration">Регистрация</NavLink>
        </div>
    </div>
}

