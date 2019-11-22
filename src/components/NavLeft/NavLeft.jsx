import React from 'react';
import style from './NavLeft.module.css';
import {NavLink} from "react-router-dom";

const NavLeft = () => {
    return (
        <nav className={style.navLeft}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Начало работы</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Основные понятия</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Справочник API</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Другие темы</NavLink>
            </div>
        </nav>
    )
};

export default NavLeft;