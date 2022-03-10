import { rest } from 'msw'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import OrderEntry from '../OrderEntry'
import { server } from '../../mocks/server'

describe.only('handle server errors for scoops & toppings', () => {
  test('display image for each scoop option', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }))
      }),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }))
      }),
    )

    render(<OrderEntry />)

    // get all images
    const errorAlerts = await screen.findAllByRole('alert', { name: /error/i }) //
    expect(errorAlerts).toHaveLength(2)
  })
})
