import {camelToCapitalWithSpaces} from './string'

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    const text = 'Red'
    const result = camelToCapitalWithSpaces(text)
    expect(result).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    const text = 'MidnightBlue'
    const result = camelToCapitalWithSpaces(text)
    expect(result).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    const text = 'MediumVioletRed'
    const result = camelToCapitalWithSpaces(text)
    expect(result).toBe('Medium Violet Red')
  })
})
