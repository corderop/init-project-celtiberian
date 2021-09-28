import React from 'react'
import EditBook from '../../src/components/editBook/editBook.component'
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

describe('EditBook component', () => {
  let titleInput: ReactTestInstance
  let authorInput: ReactTestInstance
  let descriptionInput: ReactTestInstance
  let submitButton: ReactTestInstance
  let cancelButton: ReactTestInstance
  const editBookEvent = jest.fn((book: ObjectField) => {
    book
  })
  const cancelBookEditEvent = jest.fn()

  beforeEach(async () => {
    const { getByTestId } = render(
      <EditBook
        book={{
          id: 1,
          title: 'Title',
          author: 'Author',
          description: 'Description'
        }}
        editBook={editBookEvent}
        cancelAction={cancelBookEditEvent}
      />
    )

    titleInput = getByTestId('editBook.form.input.title.input')
    authorInput = getByTestId('editBook.form.input.author.input')
    descriptionInput = getByTestId('editBook.form.input.description.input')
    cancelButton = getByTestId('editBook.form.buttonWrap.0')
    submitButton = getByTestId('editBook.form.buttonWrap.1')
  })

  afterEach(async () => {
    cleanup()
  })

  test('Cancel callback is called', async () => {
    fireEvent.press(cancelButton)
    expect(cancelBookEditEvent).toHaveBeenCalled()
  })

  test('Default values are correct', async () => {
    expect(titleInput).toHaveProp('defaultValue', 'Title')
    expect(authorInput).toHaveProp('defaultValue', 'Author')
    expect(descriptionInput).toHaveProp('defaultValue', 'Description')
  })

  test('Submit callback is called with the correct values', () => {
    fireEvent.changeText(titleInput, 'Test title')
    fireEvent.changeText(authorInput, 'Test author')
    fireEvent.changeText(descriptionInput, 'Test description')
    fireEvent.press(submitButton)

    expect(editBookEvent).toHaveBeenCalledWith({
      title: 'Test title',
      author: 'Test author',
      description: 'Test description'
    })
  })
})
