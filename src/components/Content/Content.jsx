import React from 'react';
import style from './Content.module.css';
import PostsContainer from "./Posts/PostsContainer";

const Content = () => {
    return (
        <div className={style.content}>
            <PostsContainer/>
        </div>
    )
};

export default Content;