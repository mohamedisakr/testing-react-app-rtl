import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Row } from 'react-bootstrap'
import ScoopOptions from './ScoopOptions'
import ToppingOption from './ToppingOption'

const Options = ({ optionType }) => {
  const [scoops, setScoops] = useState([])
  const [show, setShow] = useState(true)

  const ServerErrorAlert = () => (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Server Error</Alert.Heading>
      <p>Something went wrong. Please try again later</p>
    </Alert>
  )

  useEffect(() => {
    getScoops()
  }, [optionType])

  const getScoops = async () => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`)
      setScoops(res.data)
    } catch (err) {
      console.log(err)
      ServerErrorAlert()
    }
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption

  const OptionItem = scoops.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ))

  return <Row>{OptionItem}</Row>
}

export default Options
