import {combineReducers, createStore} from "redux";
import contentReducer from "./content-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
});

let store = createStore(reducers);

export default store;