import {
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  NEW_BOOKS,
  DELETE_ALL_BOOKS,
  State,
  createBookAction,
  newBooksAction,
  updateBookAction,
  deleteBookAction,
  deleteAllBooksAction
} from '../types'
import BooksService from '../../services/books.service'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const getBooks =
  (): ThunkAction<void, State, unknown, newBooksAction> =>
  async (dispatch: Dispatch<newBooksAction>) => {
    const bs = await BooksService.getAllBooks()

    dispatch({
      type: NEW_BOOKS,
      payload: bs
    })
  }

export const createBook =
  (
    title: string,
    author: string,
    description: string
  ): ThunkAction<void, State, unknown, createBookAction> =>
  async (dispatch) => {
    const id = await BooksService.addBook(title, author, description)

    if (id != -1) {
      dispatch({
        type: CREATE_BOOK,
        payload: {
          id: id,
          title: title,
          description: description,
          author: author
        }
      })
    }
  }

export const updateBook =
  (
    id: number,
    title: string,
    description: string,
    author: string
  ): ThunkAction<void, State, unknown, updateBookAction> =>
  async (dispatch) => {
    const res = await BooksService.updateBook(id, title, author, description)

    if (res) {
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
  }

export const deleteBook =
  (id: number): ThunkAction<void, State, unknown, deleteBookAction> =>
  async (dispatch) => {
    const res = await BooksService.deleteBook(id)

    if (res) {
      dispatch({
        type: DELETE_BOOK,
        payload: id
      })
    }
  }

export const deleteAllBooks =
  (): ThunkAction<void, State, unknown, deleteAllBooksAction> =>
  (dispatch: Dispatch<deleteAllBooksAction>) => {
    // Here would come the HTTP call and their error catching

    dispatch({ type: DELETE_ALL_BOOKS })
  }
