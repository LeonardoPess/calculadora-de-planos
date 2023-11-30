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
  isCheapestPlan: boolean
  setCheapestPlanPriceTotal: (priceTotalWithExtrasPlays: number) => void
  cheapestPlanPriceTotal: number
  isBr: boolean
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
  isCheapestPlan,
  setCheapestPlanPriceTotal,
  cheapestPlanPriceTotal,
  isBr,
}: InformationsPlanProps) {
  const isPlaysAvailableOver = consumptionEstimate > playsAvailable
  const totalExtrasPlays = isPlaysAvailableOver
    ? (consumptionEstimate - playsAvailable) * extraPlaysPrice
    : 0

  const priceTotalWithExtrasPlays =
    ((price + totalExtrasPlays) * (100 - discount)) / 100

  isCheapestPlan && setCheapestPlanPriceTotal(priceTotalWithExtrasPlays)

  function moneyFormatter(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const wastedValue =
    priceTotalWithExtrasPlays > cheapestPlanPriceTotal
      ? priceTotalWithExtrasPlays - cheapestPlanPriceTotal
      : priceTotalWithExtrasPlays - cheapestPlanPriceTotal

  const currencySymbol = isBr ? 'R$' : '$'
  return (
    <InformationsPlanContainer border={isCheapestPlan}>
      <h2 className={isCheapestPlan ? 'active' : ''}>{name}</h2>
      <span>
        Plays: <strong>{playsAvailable.toLocaleString('pt-BR')}</strong>
      </span>
      <span>
        Valor: <strong>{currencySymbol + moneyFormatter(price)}</strong>
      </span>
      <span>
        Play Extra:{' '}
        <strong>{currencySymbol + moneyFormatter(extraPlaysPrice)}</strong>
      </span>
      <span>
        Upgrade em: <strong>{upgradeAt.toLocaleString('pt-BR')}</strong>
      </span>
      <span>
        Total Excedente:{' '}
        <strong>{currencySymbol + moneyFormatter(totalExtrasPlays)}</strong>
      </span>
      <span>
        Valor próx plano:{' '}
        <strong>{currencySymbol + moneyFormatter(priceToUpgrade)}</strong>
      </span>
      <span>
        Valor desperdiçado:{' '}
        <strong>{currencySymbol + moneyFormatter(wastedValue)}</strong>
      </span>
      <strong>
        Total: {currencySymbol + moneyFormatter(priceTotalWithExtrasPlays)}
      </strong>
    </InformationsPlanContainer>
  )
}
