import React from 'react'
import ButtonComponent from '../../src/components/button/button.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import modulesMock from '../../__mock__/modules'
import { ReactTestInstance } from 'react-test-renderer'

modulesMock()

describe('Button component', () => {
  let button: ReactTestInstance
  let text: ReactTestInstance
  const onPressEvent = jest.fn()

  beforeAll(async () => {
    const { getByTestId } = render(
      <ButtonComponent
        text={'Text'}
        color={'#FFF'}
        testID={'button'}
        onPress={onPressEvent}
      />
    )

    button = getByTestId('button')
    text = getByTestId('button.text')
  })

  afterAll(() => {
    cleanup()
  })

  test('Check color prop', async () => {
    expect(button).toHaveStyle({
      backgroundColor: '#FFF'
    })
  })

  test('Text element exists with the correct content', () => {
    expect(text).toHaveTextContent('Text')
  })

  test('OnPress function triggered on press', () => {
    fireEvent.press(button)
    expect(onPressEvent).toHaveBeenCalled()
  })
})
