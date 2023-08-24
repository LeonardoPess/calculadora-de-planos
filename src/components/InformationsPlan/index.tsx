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
      <span>
        Valor desperdiçado: <strong>R${moneyFormatter(wastedValue)}</strong>
      </span>
      <strong>Total: R${moneyFormatter(priceTotalWithExtrasPlays)}</strong>
    </InformationsPlanContainer>
  )
}
