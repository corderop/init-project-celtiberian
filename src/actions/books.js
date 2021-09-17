import { 
    CREATE_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK,
    NEW_BOOKS,
    DELETE_ALL_BOOKS
} from "./types";
import BooksService from '../services/books.service';

export const getBooks = () => async (dispatch) => {

    const bs = await BooksService.getAllBooks(); 
    
    dispatch({
        type: NEW_BOOKS,
        payload: {
            books: bs
        }
    })

}

export const createBook = (title, description, author) => (dispatch) => {

    // Here would come the HTTP call and their error catching

    dispatch({
        type: CREATE_BOOK,
        payload: {
            title: title,
            description: description,
            author: author
        }
    })
    
}

export const updateBook = (id, title, description, author) => (dispatch) => {

    // Here would come the HTTP call and their error catching

    dispatch({
        type: UPDATE_BOOK,
        payload: {
            id: id,
            title: title,
            description: description,
            author: author
        }
    })
    
}

export const deleteBook = (id) => (dispatch) => {

    // Here would come the HTTP call and their error catching

    dispatch({
        type: DELETE_BOOK,
        payload: {
            id: id
        }
    })
    
}

export const deleteAllBooks = () => (dispatch) => {

    // Here would come the HTTP call and their error catching

    dispatch({ type: DELETE_ALL_BOOKS })

}