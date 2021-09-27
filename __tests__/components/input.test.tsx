import React from 'react'
import Input from '../../src/components/input/input.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import modulesMock from '../../__mock__/modules'
import { Text, TextInput } from 'react-native'
import { ReactTestInstance } from 'react-test-renderer'

modulesMock()

describe('Input component', () => {
  let inputElement: ReactTestInstance
  const onChangeTextEvent = jest.fn((val: string) => {
    val
  })

  beforeAll(async () => {
    const { getByTestId } = render(
      <Input
        title={'Title'}
        defaultValue={'Test value'}
        onChangeText={onChangeTextEvent}
        testID={'1'}
        style={{ backgroundColor: 'aquamarine' }}
      />
    )

    inputElement = getByTestId('input.1')
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
    const textComponent = inputElement.findByType(Text)
    expect(textComponent).toHaveTextContent('Title')
    expect(textComponent).toHaveProp('testID', 'testLabel.1')
  })

  test('Input exists with the provided defaultValue', () => {
    const textComponent = inputElement.findByType(TextInput)
    expect(textComponent).toHaveProp('testID', 'testInput.1')
    expect(textComponent).toHaveProp('defaultValue', 'Test value')
  })

  test('Input call onChangeText function on change', () => {
    const textComponent = inputElement.findByType(TextInput)
    fireEvent.changeText(textComponent, 'Other text')
    expect(onChangeTextEvent).toHaveBeenCalledWith('Other text')
  })
})
