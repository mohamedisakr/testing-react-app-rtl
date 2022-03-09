import { useState } from 'react'
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
// import CustomTooltip from '../../common/CustomTooltip'

const renderTooltip = props => (
  <Tooltip id="button-tooltip" {...props}>
    No ice cream will actually be delivered
  </Tooltip>
)

const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false)

  const handleButtonClick = event => {
    event.preventDefault()
  }

  const checkboxLable = (
    <OverlayTrigger placement="right" overlay={renderTooltip}>
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
