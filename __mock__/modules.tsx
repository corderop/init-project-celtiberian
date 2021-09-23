export default function mock(): void {
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

  // Mock HTTP requests
  jest.mock('axios')
}
