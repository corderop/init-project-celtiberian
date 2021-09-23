import {
  CREATE_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  NEW_BOOKS,
  DELETE_ALL_BOOKS,
  State,
  Action
} from '../types'
import { Reducer } from 'redux'

const reducer: Reducer<State, Action> = (state, action) => {
  const { type, payload } = action

  // To avoid apply actions to an undefined state
  if (state === undefined) {
    return state
  }

  switch (type) {
    case NEW_BOOKS:
      return {
        ...state,
        books: {
          ...payload
        }
      }

    case CREATE_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          [payload.id]: payload
        }
      }

    case UPDATE_BOOK:
      return {
        ...state,
        books: {
          ...state.books,
          [payload.id]: payload
        }
      }

    case DELETE_BOOK:
      // eslint-disable-next-line no-case-declarations
      const cloneBooks = Object.assign({}, state.books)
      delete cloneBooks[payload]
      return {
        ...state,
        books: cloneBooks
      }

    case DELETE_ALL_BOOKS:
      return {
        ...state,
        books: {}
      }

    default:
      return state
  }
}

export default reducer
