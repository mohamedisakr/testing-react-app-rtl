// src/mocks/handlers.js
import { rest } from 'msw'
import { iceCreamFlavors, toppings } from '../fixtures/sample-data'

export const handlers = [
  // Handles a GET /scoops request
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(iceCreamFlavors))
  }),

  // Handles a GET /toppings request
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(toppings))
  }),
]
