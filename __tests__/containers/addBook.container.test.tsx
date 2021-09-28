import React from 'react'
import { render, waitFor, cleanup } from '@testing-library/react-native'
import AddBookContainer from '../../src/containers/addBook.container'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import AppMock from '../../__mock__/AppMock'
import booksReducer from '../../src/redux/reducers/books'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import Navbar from '../../src/components/navbar/navbar.component'
import { Text, TextInput } from 'react-native'
import Form from '../../src/components/form/form.component'
import Input from '../../src/components/input/input.component'
import ButtonWrap from '../../src/components/buttonWrap/buttonWrap.component'
import ButtonComponent from '../../src/components/button/button.component'

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

describe('AddBook container', () => {
  let addBooksContainer: ReactTestInstance
  let form: ReactTestInstance

  beforeAll(async () => {
    // Mocked store for Redux
    const store = createStore(
      booksReducer,
      INITIAL_STATE,
      applyMiddleware(...[thunk])
    )

    const { getByTestId } = render(
      <AppMock store={store} Component={AddBookContainer} componentProps={{}} />
    )

    addBooksContainer = await waitFor(async () => getByTestId('addBook'))
  })

  afterAll(() => {
    cleanup()
  })

  test('Load the navbar', () => {
    const navbar = addBooksContainer.findByType(Navbar)
    expect(navbar).toBeTruthy()
  })

  test('Load the form', () => {
    form = addBooksContainer.findByType(Form)
    expect(form).toBeTruthy()
  })

  test('The form info is correct', () => {
    const inputs = form.findAllByType(Input)
    expect(inputs.length).toBe(3)

    expect(inputs[0].findByType(Text)).toHaveTextContent('Título')
    expect(inputs[0].findByType(TextInput)).toBeTruthy()
    expect(inputs[1].findByType(Text)).toHaveTextContent('Autor')
    expect(inputs[1].findByType(TextInput)).toBeTruthy()
    expect(inputs[2].findByType(Text)).toHaveTextContent('Descripción')
    expect(inputs[2].findByType(TextInput)).toBeTruthy()
  })

  test('Buttons are displayed', () => {
    const buttons = form
      .findByType(ButtonWrap)
      .findAllByType(ButtonComponent, { deep: true })
    expect(buttons.length).toBe(2)

    expect(buttons[0].findByType(Text)).toHaveTextContent('Cancelar')
    expect(buttons[1].findByType(Text)).toHaveTextContent('Enviar')
  })
})
