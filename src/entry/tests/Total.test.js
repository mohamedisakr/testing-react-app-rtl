import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Options from '../options'

describe('total', () => {
  test('update scoop subtotals when scoops changed', async () => {
    render(<Options optionType="scoops" />)

    // initial $0.00
    const scoopSubtotals = screen.getByText(/scoop total: /i, { exact: false })
    expect(scoopSubtotals).toHaveTextContent('0.00') //0.00/i

    // choose 1 vanilla scoop, check subtotals
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: /vanilla/i,
    })
    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, '1')
    expect(scoopSubtotals).toHaveTextContent('2.00') //0.00/i

    // choose 2 chocolate scoops, check subtotals again
    const chocolateInput = await screen.findByRole('spinbutton', {
      name: /choco/i,
    })
    userEvent.clear(chocolateInput)
    userEvent.type(chocolateInput, '2')
    expect(scoopSubtotals).toHaveTextContent('6.00') //0.00/i
  })
})
