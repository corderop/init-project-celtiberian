import React from 'react'
import BooksList from '../../src/components/booksList/booksList.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import BookElement from '../../src/components/bookElement/bookElement.component'
import { Text } from 'react-native'

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('Books List component', () => {
  let booksList: ReactTestInstance
  const onBookPressEvent = jest.fn((id: number) => {
    id
  })

  beforeAll(async () => {
    const { getByTestId } = render(
      <BooksList
        books={[
          {
            id: 1,
            title: 'Test title 1',
            author: 'Test author 1',
            description: 'Test description 1'
          },
          {
            id: 2,
            title: 'Test title 2',
            author: 'Test author 2',
            description: 'Test description 2'
          }
        ]}
        onBookPress={onBookPressEvent}
        style={{ backgroundColor: 'aquamarine' }}
        testID={'bookList'}
      />
    )

    booksList = getByTestId('bookList')
  })

  afterAll(() => {
    cleanup()
  })

  test('Styles applied', async () => {
    expect(booksList).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
  })

  test('The book list has two books', () => {
    const books = booksList.findAllByType(BookElement)
    expect(books.length).toBe(2)

    const [title1, author1] = books[0].findAllByType(Text)
    expect(title1).toHaveTextContent('Test title 1')
    expect(author1).toHaveTextContent('Test author 1')

    const [title2, author2] = books[1].findAllByType(Text)
    expect(title2).toHaveTextContent('Test title 2')
    expect(author2).toHaveTextContent('Test author 2')
  })

  test('Pressing on a book trigger the action', () => {
    const books = booksList.findAllByType(BookElement)

    fireEvent.press(books[0])
    expect(onBookPressEvent).toHaveBeenCalledWith(1)
  })
})
