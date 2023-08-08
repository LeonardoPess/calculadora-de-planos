import { InformationsPlanContainer } from './styles'

interface InformationsPlanProps {
  name: string
  playsAvailable: number
  price: number
  extraPlaysPrice: number
  upgradeAt: number
  priceToUpgrade: number
  consumptionEstimate: number
  isBestPlan?: boolean
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
  isBestPlan = false,
  discount = 0,
}: InformationsPlanProps) {
  function moneyFormatter(value: number) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const isPlaysAvailableOver = consumptionEstimate > playsAvailable
  const totalExcedente = isPlaysAvailableOver
    ? (consumptionEstimate - playsAvailable) * extraPlaysPrice
    : 0

  const priceTotalToPay = ((price + totalExcedente) * (100 - discount)) / 100

  return (
    <InformationsPlanContainer>
      <h2 className={isBestPlan ? 'active' : ''}>{name}</h2>
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
        Total Excedente: <strong>R${moneyFormatter(totalExcedente)}</strong>
      </span>
      <span>
        Valor próx plano: <strong>R${moneyFormatter(priceToUpgrade)}</strong>
      </span>
      <strong>Total: R${moneyFormatter(priceTotalToPay)}</strong>
    </InformationsPlanContainer>
  )
}
