import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import AlertBanner from '../common/AlertBanner'
import { pricePerItem } from '../constants'
import { useOrderDetails } from '../contexts/OrderDetails'
import ScoopOptions from './ScoopOptions'
import ToppingOption from './ToppingOption'

const Options = ({ optionType }) => {
  const [scoops, setScoops] = useState([])
  const [hasError, setHasError] = useState(false)
  const [orderDetails, updateItemCount] = useOrderDetails()

  const { totals } = orderDetails

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
  const title = `${optionType[0].toUpperCase()}${optionType
    .slice(1)
    .toLowerCase()}`

  const OptionItem = scoops.map(({ name, imagePath }) => (
    <ItemComponent
      key={name}
      name={name}
      imagePath={imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ))

  return (
    <>
      {/* <Row>{hasError ? <AlertBanner /> : OptionItem}</Row> */}
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {totals[optionType]}
      </p>
      <Row>{OptionItem}</Row>
    </>
  )
}

export default Options
