import React from 'react'
import BookInfo from '../../src/components/bookInfo/bookInfo.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { Text } from 'react-native'
import { ReactTestInstance } from 'react-test-renderer'

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('BookElement component', () => {
  let bookElement: ReactTestInstance
  let deleteButton: ReactTestInstance
  let editButton: ReactTestInstance
  const deleteBookEvent = jest.fn()
  const editBookEvent = jest.fn()

  beforeAll(async () => {
    const { getByTestId } = render(
      <BookInfo
        title={'Title'}
        author={'Author'}
        description={'Description'}
        deleteBook={deleteBookEvent}
        editBook={editBookEvent}
        style={{ backgroundColor: 'aquamarine' }}
        testID={'bookInfo'}
      />
    )

    bookElement = getByTestId('bookInfo')
    deleteButton = getByTestId('button.0')
    editButton = getByTestId('button.1')
  })

  afterAll(() => {
    cleanup()
  })

  test('Styles applied', async () => {
    expect(bookElement).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
  })

  test('The book info is displayed properly', () => {
    const textComponent = bookElement.findAllByType(Text)
    expect(textComponent[0]).toHaveTextContent('Title')
    expect(textComponent[1]).toHaveTextContent('Author')
    expect(textComponent[2]).toHaveTextContent('Description')
  })

  test('Delete function are called on press delete button', () => {
    fireEvent.press(deleteButton)
    expect(deleteBookEvent).toHaveBeenCalled()
  })

  test('Delete function are called on press delete button', () => {
    fireEvent.press(editButton)
    expect(editBookEvent).toHaveBeenCalled()
  })
})
