import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react-native'
import BooksContainer from '../../src/containers/books.container'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import AppMock from '../../__mock__/AppMock'
import booksReducer from '../../src/redux/reducers/books'
import axios from 'axios'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import Navbar from '../../src/components/navbar/navbar.component'
import BooksList from '../../src/components/booksList/booksList.component'
import BookElement from '../../src/components/bookElement/bookElement.component'
import { Text } from 'react-native'

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { View } = require('react-native')

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In'
    },
    Easing: {
      in: jest.fn(),
      out: jest.fn(),
      inOut: jest.fn()
    }
  }
})

jest.mock('axios')

const INITIAL_STATE = {
  books: {}
}

describe('Books container', () => {
  let booksContainer: ReactTestInstance
  let booksList: ReactTestInstance

  beforeAll(async () => {
    // Mocked store for Redux
    const store = createStore(
      booksReducer,
      INITIAL_STATE,
      applyMiddleware(...[thunk])
    )

    const data = {
      data: {
        1: {
          id: 1,
          title: 'Test title 1',
          author: 'Test author 1',
          description: 'Test description 1'
        },
        2: {
          id: 2,
          title: 'Test title 2',
          author: 'Test author 2',
          description: 'Test description 2'
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.mockImplementationOnce(() => Promise.resolve(data))

    const { getByTestId } = render(
      <AppMock store={store} Component={BooksContainer} componentProps={{}} />
    )

    booksContainer = await waitFor(async () => getByTestId('booksContainer'))
  })

  afterAll(() => {
    cleanup()
  })

  test('Load the navbar', () => {
    const navbar = booksContainer.findByType(Navbar)
    expect(navbar).toBeTruthy()
  })

  test('Load the bookList', () => {
    booksList = booksContainer.findByType(BooksList)
    expect(booksList).toBeTruthy()
  })

  test('Check the books info is correct', () => {
    const books = booksList.findAllByType(BookElement)
    expect(books.length).toBe(2)

    // Check the books match with the API mocked data
    let textElement = books[0].findAllByType(Text)
    expect(textElement[0]).toHaveTextContent('Test title 1')
    expect(textElement[1]).toHaveTextContent('Test author 1')

    textElement = books[1].findAllByType(Text)
    expect(textElement[0]).toHaveTextContent('Test title 2')
    expect(textElement[1]).toHaveTextContent('Test author 2')
  })
})
