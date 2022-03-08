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

test('button enabled/disabled when checkbox clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toBeEnabled()

  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()

  userEvent.click(checkBox)
  expect(button).toBeDisabled()

  userEvent.click(checkBox)
  expect(button).toBeEnabled()
})
