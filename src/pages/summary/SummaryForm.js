import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SummaryForm = () => {
  const [termsChecked, setTermsChecked] = useState(false)

  const checkboxLable = (
    <span>
      I agree to{' '}
      <span style={{ color: 'blueviolet' }}>Terms and Conditions</span>
    </span>
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
      <Button variant="primary" type="submit" disabled={!termsChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
