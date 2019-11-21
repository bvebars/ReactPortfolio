import React from 'react';
import style from './NavLeft.module.css';
import {NavLink} from "react-router-dom";

const NavLeft = () => {
    return (
        <nav className={style.navLeft}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
        </nav>
    )
};

export default NavLeft;