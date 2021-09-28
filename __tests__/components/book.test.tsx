import React from 'react'
import BookComponent from '../../src/components/book/book.component'
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

describe('Book component', () => {
  let titleField: ReactTestInstance
  let authorField: ReactTestInstance
  let descriptionField: ReactTestInstance
  let deleteButton: ReactTestInstance
  let editButton: ReactTestInstance
  const deleteBookEvent = jest.fn()
  const editBookEvent = jest.fn()

  beforeEach(async () => {
    const { getByTestId } = render(
      <BookComponent
        book={{
          id: 1,
          title: 'Test title',
          author: 'Test author',
          description: 'Test description'
        }}
        deleteBook={deleteBookEvent}
        editBook={editBookEvent}
      />
    )

    titleField = getByTestId('bookComponent.bookInfo.title')
    authorField = getByTestId('bookComponent.bookInfo.author')
    descriptionField = getByTestId('bookComponent.bookInfo.description')
    deleteButton = getByTestId('bookComponent.bookInfo.buttonWrap.0')
    editButton = getByTestId('bookComponent.bookInfo.buttonWrap.1')
  })

  afterEach(async () => {
    cleanup()
  })

  test('Book information are display properly', () => {
    expect(titleField).toHaveTextContent('Test title')
    expect(authorField).toHaveTextContent('Test author')
    expect(descriptionField).toHaveTextContent('Test description')
  })

  test('Delete button trigger the action', async () => {
    fireEvent.press(deleteButton)
    expect(deleteBookEvent).toHaveBeenCalled()
  })

  test('Submit button trigger the action', () => {
    fireEvent.press(editButton)
    expect(editBookEvent).toHaveBeenCalled()
  })
})
