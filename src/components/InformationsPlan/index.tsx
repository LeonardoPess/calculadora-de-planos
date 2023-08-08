import { useEffect, useState } from 'react'

import { InformationsPlanContainer } from './styles'

interface InformationsPlanProps {
  name: string
  playsAvailable: number
  price: number
  extraPlaysPrice: number
  upgradeAt: number
  priceToUpgrade: number
  consumptionEstimate: number
  discount?: number
}

export function InformationsPlan({
  name,
  playsAvailable,
  price,
  extraPlaysPrice,
  upgradeAt,
  priceToUpgrade,
  consumptionEstimate,
  discount = 0,
}: InformationsPlanProps) {
  const [isCheapestPlan, setIsCheapestPlan] = useState(false)

  const isPlaysAvailableOver = consumptionEstimate > playsAvailable
  const totalExtrasPlays = isPlaysAvailableOver
    ? (consumptionEstimate - playsAvailable) * extraPlaysPrice
    : 0

  const priceTotalWithExtrasPlays =
    ((price + totalExtrasPlays) * (100 - discount)) / 100

  function moneyFormatter(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  useEffect(() => {
    setIsCheapestPlan(false)
    if (name === 'Basic' && consumptionEstimate < 17500) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Pro' &&
      consumptionEstimate > 17500 &&
      consumptionEstimate < 45000
    ) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Scale' &&
      consumptionEstimate > 45000 &&
      consumptionEstimate < 97500
    ) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Enterprise 100k' &&
      consumptionEstimate > 97500 &&
      consumptionEstimate < 240000
    ) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Enterprise 250k' &&
      consumptionEstimate > 240000 &&
      consumptionEstimate < 460000
    ) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Enterprise 500k' &&
      consumptionEstimate > 460000 &&
      consumptionEstimate < 1050000
    ) {
      setIsCheapestPlan(true)
    } else if (
      name === 'Enterprise Unlimited' &&
      consumptionEstimate > 1050000
    ) {
      setIsCheapestPlan(true)
    }
  }, [name, consumptionEstimate])

  return (
    <InformationsPlanContainer border={isCheapestPlan}>
      <h2 className={isCheapestPlan ? 'active' : ''}>{name}</h2>
      <span>
        Plays: <strong>{playsAvailable.toLocaleString('pt-BR')}</strong>
      </span>
      <span>
        Valor: <strong>R${moneyFormatter(price)}</strong>
      </span>
      <span>
        Play Extra: <strong>R${moneyFormatter(extraPlaysPrice)}</strong>
      </span>
      <span>
        Upgrade em: <strong>{upgradeAt.toLocaleString('pt-BR')}</strong>
      </span>
      <span>
        Total Excedente: <strong>R${moneyFormatter(totalExtrasPlays)}</strong>
      </span>
      <span>
        Valor próx plano: <strong>R${moneyFormatter(priceToUpgrade)}</strong>
      </span>
      <strong>Total: R${moneyFormatter(priceTotalWithExtrasPlays)}</strong>
    </InformationsPlanContainer>
  )
}
