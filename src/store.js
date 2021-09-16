import { createStore } from "redux";
import booksReducer from "./reducers/books";

const INITIAL_STATE = {
    books: { 
        "1": {id: "1", title: "Harry Potter", description: "A young magician", author: "J.K. Rowling"}
    }
}

export default store = createStore(
    booksReducer,
    INITIAL_STATE
)