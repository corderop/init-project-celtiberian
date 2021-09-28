import React from 'react'
import Navbar from '../../src/components/navbar/navbar.component'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect'
import { ReactTestInstance } from 'react-test-renderer'
import { Pressable, Text } from 'react-native'

describe('Navbar component', () => {
  let navbar: ReactTestInstance
  let pages: Array<ReactTestInstance>
  const onPressEvent1 = jest.fn()
  const onPressEvent2 = jest.fn()

  beforeAll(async () => {
    const { getByTestId } = render(
      <Navbar
        pages={[
          {
            key: 1,
            text: 'Page 1',
            action: onPressEvent1
          },
          {
            key: 2,
            text: 'Page 2',
            action: onPressEvent2
          }
        ]}
        testID={'navbar'}
      />
    )

    navbar = getByTestId('navbar')
    pages = navbar.findAllByType(Pressable)
  })

  afterAll(() => {
    cleanup()
  })

  test('The navbar create the two pages properly', () => {
    expect(pages.length).toBe(2)

    expect(pages[0].findByType(Text)).toHaveTextContent('Page 1')
    expect(pages[1].findByType(Text)).toHaveTextContent('Page 2')
  })

  test('Pressing on a page triggers the action', () => {
    fireEvent(pages[0], 'pressOut')
    expect(onPressEvent1).toHaveBeenCalled()
  })
})
