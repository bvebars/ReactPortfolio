const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_POST = 'SET_POST';

let initialState = {
    posts: []
};

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newText: action.newText
            }
        }
        case SET_POST: {
            return {...state, posts: [...state.posts, ...action.posts]}
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersActionCreator = (posts) => ({type: SET_POST, posts });

export default contentReducer;