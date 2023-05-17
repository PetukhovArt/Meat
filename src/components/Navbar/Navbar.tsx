import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {SuperButton} from '../Button/SuperButton';
import {COLD_ROUTE, COPCH_ROUTE, POLY_ROUTE} from '../../utils/consts';


export const Navbar: React.FC = () => {
    const setActive = ({isActive}: { isActive: boolean }) =>
        isActive ? s.active : s.item;

    return (
        <div className={s.navbar}>
            <div className={s.itemWrapper}>
                <Stack spacing={2} direction="column">
                    <SuperButton name={'Копчености'} route={COPCH_ROUTE}  color={'primary'}/>
                    {/*на главную перенести в логин/регу*/}
                    <SuperButton name={'Полуфабрикаты'} route={POLY_ROUTE}  color={'primary'}/>
                    <SuperButton name={'Охлажденка'} route={COLD_ROUTE}  color={'primary'}/>
                </Stack>
                {/*<NavLink className={setActive}*/}
                {/*              to="/smokedMeat">Копченый продукт</NavLink>*/}
                {/*<NavLink className={setActive}*/}
                {/*              to="/semiFinishedMeat">Полуфабрикаты</NavLink>*/}
                {/*<NavLink className={setActive}*/}
                {/*              to="/coldMeat">Охлажденка</NavLink>*/}
            </div>
        </div>
    )
}