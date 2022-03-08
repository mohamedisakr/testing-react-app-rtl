import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('button has initail color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toHaveStyle({backgroundColor: 'red'})
})

test('button color turns to blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toHaveStyle({backgroundColor: 'red'})
  userEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button).toHaveTextContent(/red/i)
})
