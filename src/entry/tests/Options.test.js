import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../options'

describe('scoops', () => {
  test('display image for each scoop option', () => {
    render(<Options optionType="scoops" />)

    // get all images
    const images = screen.getAllByRole('img', { name: /scoop$/i })
  })
})
