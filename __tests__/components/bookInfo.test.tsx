import React from 'react'
import BookInfo from '../../src/components/bookInfo/bookInfo.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('BookElement component', () => {
  let bookElement: ReactTestInstance
  let titleElement: ReactTestInstance
  let authorElement: ReactTestInstance
  let descriptionElement: ReactTestInstance
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
    titleElement = getByTestId('bookInfo.title')
    authorElement = getByTestId('bookInfo.author')
    descriptionElement = getByTestId('bookInfo.description')
    deleteButton = getByTestId('bookInfo.buttonWrap.0')
    editButton = getByTestId('bookInfo.buttonWrap.1')
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
    expect(titleElement).toHaveTextContent('Title')
    expect(authorElement).toHaveTextContent('Author')
    expect(descriptionElement).toHaveTextContent('Description')
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
