import React from 'react'
import ButtonWrap from '../../src/components/buttonWrap/buttonWrap.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import { Pressable, Text } from 'react-native'
import ButtonComponent from '../../src/components/button/button.component'

jest.mock('react-i18next', () => ({
  useTranslation: (str: string) => ({
    t: (s: string) => `${str}.${s}`
  })
}))

describe('Button wrap component', () => {
  let buttonWrap: ReactTestInstance
  const onPressEvent = jest.fn()

  beforeAll(async () => {
    const { getByTestId } = render(
      <ButtonWrap
        buttons={[
          {
            key: 1,
            text: 'Button 1',
            onPress: onPressEvent,
            color: 'aquamarine'
          },
          {
            key: 2,
            text: 'Button 2',
            onPress: onPressEvent,
            color: 'aquamarine'
          }
        ]}
        style={{ backgroundColor: 'aquamarine' }}
        testID={'buttonWrap'}
      />
    )

    buttonWrap = getByTestId('buttonWrap')
  })

  afterAll(() => {
    cleanup()
  })

  test('Styles applied', async () => {
    expect(buttonWrap).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
  })

  test('It exists two buttons with the correct info', () => {
    const buttons = buttonWrap.findAllByType(ButtonComponent)
    expect(buttons.length).toBe(2)

    const text1 = buttons[0].findByType(Text)
    expect(buttons[0].findByType(Pressable)).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
    expect(text1).toHaveTextContent('Button 1')

    const text2 = buttons[1].findByType(Text)
    expect(buttons[1].findByType(Pressable)).toHaveStyle({
      backgroundColor: 'aquamarine'
    })
    expect(text2).toHaveTextContent('Button 2')
  })

  test('Pressing a button trigger the action', () => {
    const buttons = buttonWrap.findAllByType(ButtonComponent)

    fireEvent.press(buttons[0])
    expect(onPressEvent).toHaveBeenCalled()
  })
})
