const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Hello, this is first text?', likesCount: 12},
        {id: 2, text: 'Yes, this is one text', likesCount: 11},
        {id: 3, text: 'Hello i am Frodo', likesCount: 11},
        {id: 4, text: 'Hi Frodo', likesCount: 11}
    ],
    newText: 'Новая запись'
};

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newText,
                likesCount: 0
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
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default contentReducer;