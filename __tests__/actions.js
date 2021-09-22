import axios from 'axios'
import { applyMiddleware, createStore } from 'redux'
import booksReducer from '../src/reducers/books'
import thunk from 'redux-thunk'
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  deleteAllBooks
} from '../src/actions/books'

// Mock HTTP requests
jest.mock('axios')

const INITIAL_STATE = {
  otherData: true,
  books: {
    1: {
      id: '1',
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      description: 'A magician kid'
    },
    2: {
      id: '2',
      title: 'The Pillars of the Earth',
      author: 'Ken Follet',
      description: 'A really big book'
    }
  }
}

// Tests
describe('Books actions', () => {
  describe('Get books', () => {
    let store

    beforeEach(() => {
      // Create mocked store to test Redux actions
      store = createStore(
        booksReducer,
        INITIAL_STATE,
        applyMiddleware(...[thunk])
      )
    })

    test('Get books properly', async () => {
      const data = {
        data: {
          1: {
            id: '1',
            title: 'Test title 1',
            author: 'Test author 1',
            description: 'Test description 1'
          },
          2: {
            id: '2',
            title: 'Test title 2',
            author: 'Test author 2',
            description: 'Test description 2'
          }
        }
      }
      axios.mockImplementationOnce(() => Promise.resolve(data))

      await store.dispatch(getBooks())

      const state = store.getState()
      expect(state).toMatchObject({
        ...INITIAL_STATE,
        books: data.data
      })
    })

    test('Nerwork error getting the books', async () => {
      axios.mockImplementationOnce(() => {
        throw 'API ERROR'
      })

      await store.dispatch(getBooks())

      const state = store.getState()
      expect(state).toMatchObject({ ...INITIAL_STATE, books: {} })
    })
  })

  describe('Create book', () => {
    let store

    beforeEach(() => {
      // Create mocked store to test Redux actions
      store = createStore(
        booksReducer,
        INITIAL_STATE,
        applyMiddleware(...[thunk])
      )
    })

    test('Create book properly', async () => {
      axios.mockImplementationOnce(() => Promise.resolve({ data: { id: '3' } }))

      await store.dispatch(
        createBook('Test title', 'Test author', 'Test description')
      )

      const state = store.getState()
      expect(state).toMatchObject({
        ...INITIAL_STATE,
        books: {
          ...INITIAL_STATE.books,
          3: {
            id: '3',
            title: 'Test title',
            author: 'Test author',
            description: 'Test description'
          }
        }
      })
    })

    test('Nerwork error creating the books', async () => {
      axios.mockImplementationOnce(() => {
        throw 'API ERROR'
      })

      await store.dispatch(
        createBook('Test title', 'Test author', 'Test description')
      )

      const state = store.getState()
      expect(state).toMatchObject(INITIAL_STATE)
    })
  })

  describe('Update book', () => {
    let store

    beforeEach(() => {
      // Create mocked store to test Redux actions
      store = createStore(
        booksReducer,
        INITIAL_STATE,
        applyMiddleware(...[thunk])
      )
    })

    test('Update book properly', async () => {
      axios.mockImplementationOnce(() => Promise.resolve())

      await store.dispatch(
        updateBook('2', 'Test title', 'Test description', 'Test author')
      )

      const state = store.getState()
      expect(state).toMatchObject({
        ...INITIAL_STATE,
        books: {
          ...INITIAL_STATE.books,
          2: {
            id: '2',
            title: 'Test title',
            author: 'Test author',
            description: 'Test description'
          }
        }
      })
    })

    test('Nerwork error updating the books', async () => {
      axios.mockImplementationOnce(() => {
        throw 'API ERROR'
      })

      await store.dispatch(
        updateBook('2', 'Test title', 'Test author', 'Test description')
      )

      const state = store.getState()
      expect(state).toMatchObject(INITIAL_STATE)
    })
  })

  describe('Delete book', () => {
    let store

    beforeEach(() => {
      // Create mocked store to test Redux actions
      store = createStore(
        booksReducer,
        INITIAL_STATE,
        applyMiddleware(...[thunk])
      )
    })

    test('Delete book properly', async () => {
      axios.mockImplementationOnce(() => Promise.resolve())

      await store.dispatch(deleteBook('2'))

      const state = store.getState()
      expect(state).toMatchObject({
        ...INITIAL_STATE,
        books: {
          1: INITIAL_STATE.books[1]
        }
      })
    })

    test('Nerwork error updating the books', async () => {
      axios.mockImplementationOnce(() => {
        throw 'API ERROR'
      })

      await store.dispatch(deleteBook('2'))

      const state = store.getState()
      expect(state).toMatchObject(INITIAL_STATE)
    })
  })

  describe('Delete all book', () => {
    let store

    beforeEach(() => {
      // Create mocked store to test Redux actions
      store = createStore(
        booksReducer,
        INITIAL_STATE,
        applyMiddleware(...[thunk])
      )
    })

    test('Delete all books properly', async () => {
      await store.dispatch(deleteAllBooks())

      const state = store.getState()
      expect(state).toMatchObject({ ...INITIAL_STATE, books: {} })
    })
  })
})
