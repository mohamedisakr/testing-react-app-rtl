import { useState } from 'react'
import { Alert, Row } from 'react-bootstrap'

const AlertBanner = ({ message, variant }) => {
  //   const [show, setShow] = useState(true)
  const customMessage =
    message || 'Something went wrong. Please try again later'
  const customVariant = variant || 'danger'

  return <Alert variant={customVariant}>{customMessage}</Alert>
}

export default AlertBanner
