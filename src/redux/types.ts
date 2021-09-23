export const CREATE_BOOK = 'CREATE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const NEW_BOOKS = 'NEW_BOOKS'
export const DELETE_ALL_BOOKS = 'DELETE_ALL_BOOKS'

export type Book = {
  id: number
  title: string
  author: string
  description: string
}

export type Books = {
  [key: number]: Book
}

export type State =
  | undefined
  | {
      books: Books
    }

// Actions
export type createBookAction = {
  type: 'CREATE_BOOK'
  payload: Book
}

export type updateBookAction = {
  type: 'UPDATE_BOOK'
  payload: Book
}

export type deleteBookAction = {
  type: 'DELETE_BOOK'
  payload: number
}

export type newBooksAction = {
  type: 'NEW_BOOKS'
  payload: Books
}

export type deleteAllBooksAction = {
  type: 'DELETE_ALL_BOOKS'
  payload?: never
}

export type Action =
  | createBookAction
  | updateBookAction
  | deleteBookAction
  | newBooksAction
  | deleteAllBooksAction
