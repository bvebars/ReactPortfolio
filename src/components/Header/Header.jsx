import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' />
        </div>
    </header>
};

export default Header;