import React from 'react'
import ButtonComponent from '../../src/components/button/button.component'
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

describe('Button component', () => {
  let button: ReactTestInstance
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

    button = await waitFor(async () => getByTestId('button'))
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
    const textComponent = button.findAllByType(Text)
    expect(textComponent.length).toBe(1)
    expect(textComponent[0]).toHaveTextContent('Text')
  })

  test('OnPress function triggered on press', () => {
    fireEvent.press(button)
    expect(onPressEvent).toHaveBeenCalled()
  })
})
