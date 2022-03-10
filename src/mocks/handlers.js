// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /scoops request
  rest.get('/scoops', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Mint chip',
          imagePath: '/images/mint-chip.png',
        },
        {
          name: 'Vanilla',
          imagePath: '/images/vanilla.png',
        },
        {
          name: 'Chocolate',
          imagePath: '/images/chocolate.png',
        },
        {
          name: 'Salted caramel',
          imagePath: '/images/salted-caramel.png',
        },
      ]),
    )
  }),
]
