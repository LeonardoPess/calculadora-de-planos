import { useEffect, useState } from 'react'

import { ChartBar } from 'phosphor-react'
import { HomeContainer, FormContainer } from './styles'
import { InformationsPlan } from '../../components/InformationsPlan'

const plans = [
  {
    id: 1,
    name: 'Basic',
    playsAvailable: 10000,
    playsToStart: 0,
    price: 97,
    extraPlaysPrice: 0.02,
    upgradeAt: 17500,
    priceToUpgrade: 150,
  },
  {
    id: 2,
    name: 'Pro',
    playsAvailable: 35000,
    playsToStart: 17500,
    price: 247,
    extraPlaysPrice: 0.02,
    upgradeAt: 45000,
    priceToUpgrade: 200,
  },
  {
    id: 3,
    name: 'Scale',
    playsAvailable: 70000,
    playsToStart: 45000,
    price: 447,
    extraPlaysPrice: 0.02,
    upgradeAt: 97500,
    priceToUpgrade: 550,
  },
  {
    id: 4,
    name: 'Enterprise 100k',
    playsAvailable: 100000,
    playsToStart: 97500,
    price: 997,
    extraPlaysPrice: 0.01,
    upgradeAt: 240000,
    priceToUpgrade: 1400,
  },
  {
    id: 5,
    name: 'Enterprise 250k',
    playsAvailable: 250000,
    playsToStart: 240000,
    price: 2397,
    extraPlaysPrice: 0.01,
    upgradeAt: 460000,
    priceToUpgrade: 2100,
  },
  {
    id: 6,
    name: 'Enterprise 500k',
    playsAvailable: 500000,
    playsToStart: 460000,
    price: 4497,
    extraPlaysPrice: 0.01,
    upgradeAt: 1050000,
    priceToUpgrade: 5500,
  },
  {
    id: 7,
    name: 'Enterprise Unlimited',
    playsAvailable: Infinity,
    playsToStart: 1050000,
    price: 9997,
    extraPlaysPrice: 0,
    upgradeAt: Infinity,
    priceToUpgrade: 0,
  },
]

interface Plan {
  id: number
  name: string
  playsAvailable: number
  playsToStart: number
  price: number
  extraPlaysPrice: number
  upgradeAt: number
  priceToUpgrade: number
}

export function Home() {
  const [plansList, setPlansList] = useState<Plan[]>([])
  const [cycleStatedAt, setCycleStatedAt] = useState('')
  const [currentDate, setCurrentDate] = useState(
    new Date().toJSON().slice(0, 10),
  )
  const [consumption, setConsumption] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    setPlansList(plans)

    const date = new Date()
    const firstMonthDayDate = new Date(date.getFullYear(), date.getMonth(), 1)
    setCycleStatedAt(firstMonthDayDate.toJSON().slice(0, 10))
  }, [])

  const timeDiff =
    new Date(currentDate).getTime() - new Date(cycleStatedAt).getTime()
  const diffInDays = timeDiff / (1000 * 3600 * 24)
  const consumptionEstimate = (consumption / diffInDays) * 30

  return (
    <HomeContainer>
      <FormContainer>
        <div className="titleBox">
          <ChartBar size={22} weight="bold" />
          <div>
            <h2>Consumo</h2>
          </div>
        </div>

        <div className="inputWrapper">
          <label htmlFor="startedAt">Início do Período:</label>
          <input
            type="date"
            value={cycleStatedAt}
            onChange={(e) => setCycleStatedAt(e.target.value)}
            name="startedAt"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="currentDate">Dia Atual:</label>
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            name="currentDate"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="">Consumo (Período):</label>
          <input
            type="number"
            value={consumption}
            onChange={(e) =>
              setConsumption(Number(e.target.value.replace('.', '')))
            }
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="">Desconto(%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="">Estimativa:</label>
          <input
            disabled
            type="texte"
            value={
              Math.trunc(consumptionEstimate).toLocaleString('pt-BR') + ' Plays'
            }
          />
        </div>
      </FormContainer>

      <div>
        {plansList.map(
          ({
            id,
            name,
            playsAvailable,
            playsToStart,
            price,
            extraPlaysPrice,
            upgradeAt,
            priceToUpgrade,
          }) => {
            const isCheapestPlan =
              playsToStart <= consumptionEstimate &&
              upgradeAt > consumptionEstimate

            return (
              <InformationsPlan
                key={id}
                name={name}
                playsAvailable={playsAvailable}
                price={price}
                extraPlaysPrice={extraPlaysPrice}
                upgradeAt={upgradeAt}
                priceToUpgrade={priceToUpgrade}
                consumptionEstimate={consumptionEstimate}
                discount={discount}
                hasBorder={isCheapestPlan}
              />
            )
          },
        )}
      </div>
    </HomeContainer>
  )
}
