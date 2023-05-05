import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';



export const Navbar: React.FC = () => {
    const setActive = ({isActive}: { isActive: boolean }) =>
        isActive ? s.active : s.item;

    return (
            <div className={s.navbar}>
                <div><NavLink className={setActive}
                              to="/smokedMeat">Копченый продукт</NavLink></div>
                <div><NavLink className={setActive}
                              to="/semiFinishedMeat">Полуфабрикаты</NavLink></div>
                <div><NavLink className={setActive}
                              to="/coldMeat">Охлажденка</NavLink></div>
            </div>
    )
}