import { applyMiddleware, createStore } from 'redux'
import booksReducer from './reducers/books'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { Action, State } from './types'

const INITIAL_STATE: State = { books: {} }
const middlewares = [thunk as ThunkMiddleware<State, Action>]

export default createStore(
  booksReducer,
  INITIAL_STATE,
  applyMiddleware(...middlewares)
)
