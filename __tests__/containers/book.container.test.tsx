import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react-native'
import BookContainer from '../../src/containers/book.container'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import AppMock from '../../__mock__/AppMock'
import booksReducer from '../../src/redux/reducers/books'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import Navbar from '../../src/components/navbar/navbar.component'
import { Text } from 'react-native'
import ButtonWrap from '../../src/components/buttonWrap/buttonWrap.component'
import ButtonComponent from '../../src/components/button/button.component'
import BookInfo from '../../src/components/bookInfo/bookInfo.component'

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
  books: {
    1: {
      id: 1,
      title: 'Title',
      author: 'Author',
      description: 'Description'
    }
  }
}

describe('Book container', () => {
  let bookContainer: ReactTestInstance
  let bookInfo: ReactTestInstance

  beforeAll(async () => {
    // Mocked store for Redux
    const store = createStore(
      booksReducer,
      INITIAL_STATE,
      applyMiddleware(...[thunk])
    )

    const { getByTestId } = render(
      <AppMock
        store={store}
        Component={BookContainer}
        componentProps={{
          id: 1
        }}
      />
    )

    bookContainer = await waitFor(async () => getByTestId('bookComponent'))
  })

  afterAll(() => {
    cleanup()
  })

  test('Load the navbar', () => {
    const navbar = bookContainer.findByType(Navbar)
    expect(navbar).toBeTruthy()
  })

  test('Load the form', () => {
    bookInfo = bookContainer.findByType(BookInfo)
    expect(bookInfo).toBeTruthy()
  })

  test('The form info is correct', () => {
    const texts = bookInfo.findAllByType(Text, { deep: true })

    expect(texts[0].findByType(Text)).toHaveTextContent('Title')
    expect(texts[1].findByType(Text)).toHaveTextContent('Author')
    expect(texts[2].findByType(Text)).toHaveTextContent('Description')
  })

  test('Buttons are displayed', () => {
    const buttons = bookInfo
      .findByType(ButtonWrap)
      .findAllByType(ButtonComponent, { deep: true })
    expect(buttons.length).toBe(2)

    expect(buttons[0].findByType(Text)).toHaveTextContent('Eliminar')
    expect(buttons[1].findByType(Text)).toHaveTextContent('Editar')
  })
})
