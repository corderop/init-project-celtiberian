import { applyMiddleware, createStore } from "redux";
import booksReducer from "./reducers/books";
import thunk from 'redux-thunk';

const INITIAL_STATE = {
    books: { 
        "1": {id: "1", title: "Harry Potter", description: "A young magician", author: "J.K. Rowling"},
        "2": {id: "2", title: "Programming with Python", description: "Learn programming", author: "Pablo Cordero"}
    }
}

const middlewares = [thunk];

export default store = createStore(
    booksReducer,
    INITIAL_STATE,
    applyMiddleware(...middlewares)
)