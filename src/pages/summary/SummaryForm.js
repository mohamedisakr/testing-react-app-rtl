import { useState } from 'react'
import { Form, Button, OverlayTrigger, Popover } from 'react-bootstrap'

const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false)

  const handleButtonClick = event => {
    event.preventDefault()
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  )

  const checkboxLable = (
    <OverlayTrigger placement="right" overlay={popover}>
      <span>
        I agree to{' '}
        <span style={{ color: 'blueviolet' }}>Terms and Conditions</span>
      </span>
    </OverlayTrigger>
  )

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsChecked}
          onChange={e => setTermsChecked(e.target.checked)}
          label={checkboxLable}
        ></Form.Check>
      </Form.Group>
      <Button
        onClick={handleButtonClick}
        variant="primary"
        type="submit"
        disabled={!termsChecked}
      >
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
