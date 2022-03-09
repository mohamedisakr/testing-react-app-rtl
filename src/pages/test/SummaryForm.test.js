import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryForm from '../summary/SummaryForm'

describe('Summary form', () => {
  test('checkbox is un checked by default', () => {
    render(<SummaryForm />)

    const button = screen.getByRole('button', { name: /confirm/i })
    const checkBox = screen.getByRole('checkbox', { name: /agree/i })

    expect(button).toBeDisabled()
    expect(checkBox).not.toBeChecked()
  })

  test('checking checkbox enables button', () => {
    render(<SummaryForm />)

    const button = screen.getByRole('button', { name: /confirm/i })
    const checkBox = screen.getByRole('checkbox', { name: /agree/i })

    expect(button).toBeDisabled()
    expect(checkBox).not.toBeChecked()

    userEvent.click(checkBox)
    expect(button).toBeEnabled()
    expect(checkBox).toBeChecked()

    // userEvent.click(checkBox)
    // expect(button).toBeEnabled()
  })

  test('unchecking checkbox again disables button', () => {
    render(<SummaryForm />)

    const button = screen.getByRole('button', { name: /confirm/i })
    const checkBox = screen.getByRole('checkbox', { name: /agree/i })

    expect(button).toBeDisabled()
    expect(checkBox).not.toBeChecked()

    // first click
    userEvent.click(checkBox)
    expect(button).toBeEnabled()
    expect(checkBox).toBeChecked()

    // second click
    userEvent.click(checkBox)
    expect(button).toBeDisabled()
    expect(checkBox).not.toBeChecked()
  })
})
