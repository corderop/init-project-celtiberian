import React from 'react'
import BookElement from '../../src/components/bookElement/bookElement.component'
import {
  cleanup,
  fireEvent,
  render,
  waitFor
} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import modulesMock from '../../__mock__/modules'
import { Text } from 'react-native'
import { ReactTestInstance } from 'react-test-renderer'

modulesMock()

describe('BookElement component', () => {
  let bookElement: ReactTestInstance
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

    bookElement = await waitFor(async () => getByTestId('bookElement'))
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
    const textComponent = bookElement.findAllByType(Text)
    expect(textComponent.length).toBe(2)
    expect(textComponent[0]).toHaveTextContent('Title')
    expect(textComponent[1]).toHaveTextContent('Author')
  })

  test('OnPress function triggered on press', () => {
    fireEvent.press(bookElement)
    expect(onPressEvent).toHaveBeenCalled()
  })
})
