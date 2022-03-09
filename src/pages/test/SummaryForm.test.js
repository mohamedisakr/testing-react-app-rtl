import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryForm from '../summary/SummaryForm'

describe.only('Summary form', () => {
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

  test('popover should displayed when hover', async () => {
    render(<SummaryForm />)

    // initial hidden
    const initPopup = screen.queryByText(/ice cream/i)
    expect(initPopup).not.toBeInTheDocument()

    // appear when hover over label
    const termsAndCondition = screen.getByText(/terms/i)
    userEvent.hover(termsAndCondition)

    const popup = screen.getByText(/ice cream/i)
    expect(popup).toBeInTheDocument()

    // disappear when hover out
    userEvent.unhover(termsAndCondition)
    const disappearedPopup = screen.queryByText(/ice cream/i)
    await waitForElementToBeRemoved(() => screen.queryByText(/ice cream/i))
    expect(disappearedPopup).not.toBeInTheDocument()
  })
})
