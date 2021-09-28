import React from 'react'
import BooksComponent from '../../src/components/books/books.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
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

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('Books component', () => {
  let booksComponent: ReactTestInstance
  let booksList: ReactTestInstance
  const onBookPressEvent = jest.fn((id: number) => {
    id
  })

  beforeAll(async () => {
    const { getByTestId } = render(
      <BooksComponent
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
      />
    )

    booksComponent = getByTestId('booksComponent')
    booksList = getByTestId('booksComponent.bookList')
  })

  afterAll(() => {
    cleanup()
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
    const booksList = booksComponent.findAllByType(BookElement)

    fireEvent.press(booksList[0])
    expect(onBookPressEvent).toHaveBeenCalledWith(1)
  })
})
