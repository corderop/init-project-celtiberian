import React from 'react'
import Input from '../../src/components/input/input.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import modulesMock from '../../__mock__/modules'
import { ReactTestInstance } from 'react-test-renderer'

modulesMock()

describe('Input component', () => {
  let inputElement: ReactTestInstance
  let labelElement: ReactTestInstance
  let textInputElement: ReactTestInstance
  const onChangeTextEvent = jest.fn((val: string) => {
    val
  })

  beforeAll(async () => {
    const { getByTestId } = render(
      <Input
        title={'Title'}
        defaultValue={'Test value'}
        onChangeText={onChangeTextEvent}
        testID={'input'}
        style={{ backgroundColor: 'aquamarine' }}
      />
    )

    inputElement = getByTestId('input')
    labelElement = getByTestId('input.label')
    textInputElement = getByTestId('input.input')
  })

  afterAll(() => {
    cleanup()
  })

  test('Styles applied', async () => {
    expect(inputElement).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
  })

  test('Label exists with the provided test', () => {
    expect(labelElement).toHaveTextContent('Title')
  })

  test('Input exists with the provided defaultValue', () => {
    expect(textInputElement).toHaveProp('defaultValue', 'Test value')
  })

  test('Input call onChangeText function on change', () => {
    fireEvent.changeText(textInputElement, 'Other text')
    expect(onChangeTextEvent).toHaveBeenCalledWith('Other text')
  })
})
