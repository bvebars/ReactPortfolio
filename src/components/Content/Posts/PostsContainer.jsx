import React from 'react';
import {
    addPostActionCreator,
    setUsersActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/content-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.contentPage.posts,
        newText: state.contentPage.newText,
        title: state.contentPage.title
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        setPosts: (posts) => {
            dispatch(setUsersActionCreator(posts))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

