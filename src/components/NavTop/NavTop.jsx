import React from 'react';
import style from './NavTop.module.css';
import {NavLink} from "react-router-dom";

const NavTop = () => {
    return (
        <nav className={style.navTop}>
            <ul className={style.items}>
                <li><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></li>
            </ul>
        </nav>
    )
};

export default NavTop;