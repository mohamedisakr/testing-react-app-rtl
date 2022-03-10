import { rest } from 'msw'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import OrderEntry from '../OrderEntry'
import { server } from '../../mocks/server'

describe('handle server errors for scoops & toppings', () => {
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

    // get all alerts (2 in this case)
    await waitFor(async () => {
      const errorAlerts = await screen.findAllByRole('alert') // , {        name: /something went wrong/i,   }
      expect(errorAlerts).toHaveLength(2)
    })
  })
})
