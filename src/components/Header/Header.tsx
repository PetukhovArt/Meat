import React, {useEffect, useState} from 'react';
import c from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store-redux';
import {SuperButton} from '../Button/SuperButton';
import Stack from '@mui/material/Stack';
import {COPCH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../../utils/consts';
import {useLocation, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton/IconButton';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {ProgressBar} from '../../common/ProgressBar/ProgressBar';
import {ThemeSwitcher} from '../../common/ThemeSwitcher/ThemeSwitcher';


export const Header = (props: any) => {
    const [theme, setThemeId] = useState('light');
    const loadStatus = useSelector((state: RootState) => state.app.status)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const email = useSelector((state: RootState) => state.auth.email)
    const location = useLocation()
    const navigate = useNavigate()
    const needMain = () => {
        const {pathname} = location;
        if (location.pathname === '/login' || location.pathname === '/registration') {
            return true
        }
        //если фолс , то не отображать кнопку Главная
    };
    const toBasketHandler = () => {
        navigate('/basket')
    }
    const onClickChangeTheme = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        if (event) setThemeId(theme === 'light' ? 'dark' : 'light')
    }

    return <div className={c.header}>
            <img src={logo} alt="logo"/>
            <div className={c.loginBlock}>
                {needMain() ? <SuperButton name={'Главная'} route={COPCH_ROUTE}/> : null}
                <Stack spacing={2} direction="row">
                    <SuperButton name={'Логин'} route={LOGIN_ROUTE}/>
                    <SuperButton name={'Регистрация'} route={REGISTRATION_ROUTE}/>
                </Stack>
                <div className={c.BasketLink}>
                    <IconButton color="primary" aria-label="добавить в корзину"
                                onClick={toBasketHandler}
                    >
                        <span className={c.cartButtonCount}>1</span>
                        <LocalGroceryStoreIcon fontSize={'large'}/>
                    </IconButton>
                </div>
                <ThemeSwitcher onClickSwitch={onClickChangeTheme}/>
            </div>
        {loadStatus==='loading' && <ProgressBar/>}
        </div>
}



