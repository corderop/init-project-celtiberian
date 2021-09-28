import React from 'react'
import BookElement from '../../src/components/bookElement/bookElement.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import modulesMock from '../../__mock__/modules'
import { ReactTestInstance } from 'react-test-renderer'

modulesMock()

describe('BookElement component', () => {
  let bookElement: ReactTestInstance
  let titleElement: ReactTestInstance
  let authorElement: ReactTestInstance
  const onPressEvent = jest.fn()

  beforeAll(async () => {
    const { getByTestId } = render(
      <BookElement
        title={'Title'}
        author={'Author'}
        onPress={onPressEvent}
        testID={'bookElement'}
        style={{ backgroundColor: 'aquamarine' }}
      />
    )

    bookElement = getByTestId('bookElement')
    titleElement = getByTestId('bookElement.title')
    authorElement = getByTestId('bookElement.author')
  })

  afterAll(() => {
    cleanup()
  })

  test('Styles applied', async () => {
    expect(bookElement).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
  })

  test('Text element exists with the correct content', () => {
    expect(titleElement).toHaveTextContent('Title')
    expect(authorElement).toHaveTextContent('Author')
  })

  test('OnPress function triggered on press', () => {
    fireEvent.press(bookElement)
    expect(onPressEvent).toHaveBeenCalled()
  })
})
