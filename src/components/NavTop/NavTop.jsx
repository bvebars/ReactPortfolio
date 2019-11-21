import React from 'react';
import style from './NavTop.module.css';
import {NavLink} from "react-router-dom";

const NavTop = () => {
    return (
        <nav className={style.navTop}>
            <ul className={style.items}>
                <li><NavLink to="/profile" activeClassName={style.activeLink}>React</NavLink></li>
                <li><NavLink to="/news" activeClassName={style.activeLink}>Новости</NavLink></li>
                <li><NavLink to="/profile" activeClassName={style.activeLink}>Другие проекты</NavLink></li>
                <li><NavLink to="/profile" activeClassName={style.activeLink}>О себе</NavLink></li>
                <li><NavLink to="/profile" activeClassName={style.activeLink}>GitHub</NavLink></li>
            </ul>
        </nav>
    )
};

export default NavTop;