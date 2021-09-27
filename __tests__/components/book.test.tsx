import React from 'react'
import BookComponent from '../../src/components/book/book.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import { Text } from 'react-native'
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

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('Book component', () => {
  let bookComponent: ReactTestInstance
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

    bookComponent = getByTestId('bookComponent')
    deleteButton = getByTestId('button.0')
    editButton = getByTestId('button.1')
  })

  afterEach(async () => {
    cleanup()
  })

  test('Book information are display properly', () => {
    const bookInfo = bookComponent.findByType(BookInfo)
    const textFields = bookInfo.findAllByType(Text)

    expect(textFields[0]).toHaveTextContent('Test title')
    expect(textFields[1]).toHaveTextContent('Test author')
    expect(textFields[2]).toHaveTextContent('Test description')
  })

  test('Delete button trigger the action', async () => {
    fireEvent.press(deleteButton)
    expect(deleteBookEvent).toHaveBeenCalled()
  })

  test('Submit callback is called with the correct values', () => {
    fireEvent.press(editButton)
    expect(editBookEvent).toHaveBeenCalled()
  })
})
