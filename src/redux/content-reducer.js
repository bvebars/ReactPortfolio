const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: 'Переведено с английского языка.-Текст-заполнитель - это текст, который имеет некоторые характеристики реального письменного текста, но является случайным или генерируемым иным образом. Он может использоваться для отображения образца шрифтов, создания текста для тестирования или для подделки фильтра нежелательной почты.', likesCount: 12, title: "Переведено с английского языка"},
        {id: 2, text: 'Переведено с английского языка.-Текст-заполнитель - это текст, который имеет некоторые характеристики реального письменного текста, но является случайным или генерируемым иным образом. Он может использоваться для отображения образца шрифтов, создания текста для тестирования или для подделки фильтра нежелательной почты.', likesCount: 11, title: "Two"},
        {id: 3, text: 'Hello i am Frodo', likesCount: 11, title: "Three"},
        {id: 4, text: 'Hi Frodo', likesCount: 11, title: "Four"}
    ],

    newText: 'Новая запись'
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
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default contentReducer;