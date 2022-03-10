import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import AlertBanner from '../common/AlertBanner'
import ScoopOptions from './ScoopOptions'
import ToppingOption from './ToppingOption'

const Options = ({ optionType }) => {
  const [scoops, setScoops] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    getScoops()
  }, [optionType])

  const getScoops = async () => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`)
      setScoops(res.data)
    } catch (err) {
      console.log(err)
      setHasError(true)
    }
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption

  const OptionItem = scoops.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ))

  return <Row>{hasError ? <AlertBanner /> : OptionItem}</Row>
}

export default Options
