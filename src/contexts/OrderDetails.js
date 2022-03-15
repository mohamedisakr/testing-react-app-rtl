import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { pricePerItem } from '../constants'

const OrderDetails = createContext()

export const useOrderDetails = () => {
  const context = useContext(OrderDetails)
  if (!context) {
    throw new Error(
      `useOrderDetails must be used within a OrderDetailsProvider`,
    )
  }
  return context
}

const calculateSubtotal = (optionType, optionCounts) => {
  let optionCount = 0
  for (let count of optionCounts[optionType].values()) {
    optionCount += count
  }
  return optionCount * pricePerItem[optionType]
}

export const OrderDetailsProvider = props => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  })
  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  })

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts)
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts)
    const grandTotal = scoopsSubtotal + toppingsSubtotal
    setTotals({
      scoops: scoopsSubtotal,
      toppings: toppingsSubtotal,
      grandTotal,
    })
  }, [optionCounts])

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptionCounts = { ...optionCounts }
      const optionCountsMap = optionCounts[optionType]
      optionCountsMap.set(itemName, +newItemCount)

      setOptionCounts(newOptionCounts)
    }
    return [{ ...optionCounts, totals }, updateItemCount]
  }, [optionCounts, totals])
  return <OrderDetails.Provider value={value} {...props} />
}
