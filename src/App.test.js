import {render, screen} from '@testing-library/react'
import App from './App'

test('button has initail color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toHaveStyle({backgroundColor: 'red'})
})

test('button color turns to blue when clicked', () => {})
