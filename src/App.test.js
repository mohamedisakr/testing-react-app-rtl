import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// MediumVioletRed --> MidnightBlue
test('button has initail color', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  screen.debug()
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})
})

test('button color turns to blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})
  userEvent.click(button)
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'})
  expect(button).toHaveTextContent(/red/i)
})

test('button enabled/disabled when checkbox clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  expect(button).toBeEnabled()

  const checkBox = screen.getByRole('checkbox', {name: /toggle/i})
  expect(checkBox).not.toBeChecked()

  userEvent.click(checkBox)
  expect(button).toBeDisabled()

  userEvent.click(checkBox)
  expect(button).toBeEnabled()
})

test('disabled button has gray background, reverts to red', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /change/i})
  const checkBox = screen.getByRole('checkbox', {name: /toggle/i})

  userEvent.click(checkBox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({backgroundColor: 'gray'})

  userEvent.click(checkBox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'})
  // screen.debug()
})
