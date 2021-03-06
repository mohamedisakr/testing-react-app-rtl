import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import Options from '../options'

describe('scoops', () => {
  test('display image for each scoop option', async () => {
    render(<Options optionType="scoops" />)

    // get all images
    const images = await screen.findAllByRole('img', { name: /scoop$/i })
    expect(images).toHaveLength(4)
  })

  test('display image for each topping option', async () => {
    render(<Options optionType="toppings" />)

    // get all images
    const images = await screen.findAllByRole('img', { name: /topping$/i })
    expect(images).toHaveLength(6)
  })
})
