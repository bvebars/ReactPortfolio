import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/content-reducer";
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
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;