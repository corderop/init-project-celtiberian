import React from 'react'
import AddBook from '../../src/components/addBook/addBook.component'
import { ObjectField } from '../../src/components/form/form.types'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'

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

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('Input component', () => {
  let titleInput: ReactTestInstance
  let authorInput: ReactTestInstance
  let descriptionInput: ReactTestInstance
  let submitButton: ReactTestInstance
  let cancelButton: ReactTestInstance
  const createBookEvent = jest.fn((book: ObjectField) => {
    book
  })
  const cancelBookCreationEvent = jest.fn()

  beforeEach(async () => {
    const { getByTestId } = render(
      <AddBook
        createBook={createBookEvent}
        cancelBookCreation={cancelBookCreationEvent}
      />
    )

    titleInput = getByTestId('testInput.title')
    authorInput = getByTestId('testInput.author')
    descriptionInput = getByTestId('testInput.description')
    cancelButton = getByTestId('button.0')
    submitButton = getByTestId('button.1')

    fireEvent.changeText(titleInput, 'Test title')
    fireEvent.changeText(authorInput, 'Test author')
    fireEvent.changeText(descriptionInput, 'Test description')
  })

  afterEach(async () => {
    cleanup()
  })

  test('Cancel callback is called', async () => {
    fireEvent.press(cancelButton)
    expect(cancelBookCreationEvent).toHaveBeenCalled()
  })

  test('Submit callback is called with the correct values', () => {
    fireEvent.press(submitButton)
    expect(createBookEvent).toHaveBeenCalledWith({
      title: 'Test title',
      author: 'Test author',
      description: 'Test description'
    })
  })
})
