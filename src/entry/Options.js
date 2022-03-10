import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOptions from './ScoopOptions'

const Options = ({ optionType }) => {
  const [scoops, setScoops] = useState([])

  useEffect(() => {
    getScoops()
  }, [optionType])

  const getScoops = async () => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`)
      setScoops(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const ItemComponent = optionType === 'scoops' ? <ScoopOptions /> : null

  const OptionItem = scoops.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ))

  return <Row>{OptionItem}</Row>
}

export default Options
