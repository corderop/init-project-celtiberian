import { applyMiddleware, createStore } from "redux";
import booksReducer from "./reducers/books";
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    books: {}
}

const middlewares = [thunk];

export default store = createStore(
    booksReducer,
    INITIAL_STATE,
    applyMiddleware(...middlewares)
)