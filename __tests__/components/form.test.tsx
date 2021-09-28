import React from 'react'
import Form from '../../src/components/form/form.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import { Text } from 'react-native'
import Input from '../../src/components/input/input.component'
import { ObjectField } from '../../src/components/form/form.types'

describe('Form component', () => {
  let form: ReactTestInstance
  let fields: Array<ReactTestInstance>
  let inputs: Array<ReactTestInstance>
  let cancelButton: ReactTestInstance
  let submitButton: ReactTestInstance
  const onCancelEvent = jest.fn()
  const onSubmitEvent = jest.fn((values: ObjectField) => {
    values
  })

  beforeAll(async () => {
    const { getByTestId } = render(
      <Form
        fields={[
          {
            key: 'input1',
            title: 'Input 1',
            defaultValue: 'Default 1'
          },
          {
            key: 'input2',
            title: 'Input 2',
            defaultValue: 'Default 2'
          }
        ]}
        cancelTitle={'Cancel'}
        submitTitle={'Submit'}
        onCancel={onCancelEvent}
        onSubmit={onSubmitEvent}
        style={{ backgroundColor: 'aquamarine' }}
        testID={'form'}
      />
    )

    form = getByTestId('form')
    cancelButton = getByTestId('form.buttonWrap.0')
    submitButton = getByTestId('form.buttonWrap.1')
    fields = form.findAllByType(Input)
    inputs = [
      getByTestId('form.input.input1.input'),
      getByTestId('form.input.input2.input')
    ]
  })

  afterAll(() => {
    cleanup()
  })

  test('Input created properly', () => {
    expect(fields.length).toBe(2)

    expect(fields[0].findByType(Text)).toHaveTextContent('Input 1')
    expect(fields[0]).toHaveProp('defaultValue', 'Default 1')

    expect(fields[1].findByType(Text)).toHaveTextContent('Input 2')
    expect(fields[1]).toHaveProp('defaultValue', 'Default 2')
  })

  test('Cancel button trigger the action properly', () => {
    fireEvent.press(cancelButton)
    expect(onCancelEvent).toHaveBeenCalled()
  })

  test('It does not allow submit empty values', () => {
    fireEvent.changeText(inputs[0], '   ')
    fireEvent.press(submitButton)
    expect(onSubmitEvent).not.toHaveBeenCalled()
  })

  test('Submit the information', () => {
    fireEvent.changeText(inputs[0], 'Value 1')
    fireEvent.changeText(inputs[1], 'Value 2')
    fireEvent.press(submitButton)
    expect(onSubmitEvent).toHaveBeenCalledWith({
      input1: 'Value 1',
      input2: 'Value 2'
    })
  })
})
