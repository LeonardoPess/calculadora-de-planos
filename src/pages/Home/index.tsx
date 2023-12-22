import { useEffect, useState } from 'react'

import { ChartBar } from 'phosphor-react'
import { HomeContainer, FormContainer } from './styles'
import { InformationsPlan } from '../../components/InformationsPlan'

const plansBrasil = [
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

const plansTier1 = [
  {
    id: 1,
    name: 'Basic',
    playsAvailable: 5000,
    playsToStart: 0,
    price: 29,
    extraPlaysPrice: 0.02,
    upgradeAt: 7500,
    priceToUpgrade: 50,
  },
  {
    id: 2,
    name: 'Pro',
    playsAvailable: 15000,
    playsToStart: 7500,
    price: 79,
    extraPlaysPrice: 0.01,
    upgradeAt: 27000,
    priceToUpgrade: 120,
  },
  {
    id: 3,
    name: 'Scale',
    playsAvailable: 50000,
    playsToStart: 27000,
    price: 199,
    extraPlaysPrice: 0.01,
    upgradeAt: 69000,
    priceToUpgrade: 190,
  },
  {
    id: 4,
    name: 'Enterprise 100k',
    playsAvailable: 100000,
    playsToStart: 69000,
    price: 389,
    extraPlaysPrice: 0.005,
    upgradeAt: 212000,
    priceToUpgrade: 560,
  },
  {
    id: 5,
    name: 'Enterprise 250k',
    playsAvailable: 250000,
    playsToStart: 212000,
    price: 949,
    extraPlaysPrice: 0.005,
    upgradeAt: 420000,
    priceToUpgrade: 949,
  },
  {
    id: 6,
    name: 'Enterprise 500k',
    playsAvailable: 500000,
    playsToStart: 420000,
    price: 1799,
    extraPlaysPrice: 0.005,
    upgradeAt: Infinity,
    priceToUpgrade: 0,
  },
]

const plansTier2 = [
  {
    id: 1,
    name: 'Basic',
    playsAvailable: 8000,
    playsToStart: 0,
    price: 19,
    extraPlaysPrice: 0.004,
    upgradeAt: 13000,
    priceToUpgrade: 20,
  },
  {
    id: 2,
    name: 'Pro',
    playsAvailable: 20000,
    playsToStart: 13000,
    price: 39,
    extraPlaysPrice: 0.004,
    upgradeAt: 30000,
    priceToUpgrade: 40,
  },
  {
    id: 3,
    name: 'Scale',
    playsAvailable: 40000,
    playsToStart: 30000,
    price: 79,
    extraPlaysPrice: 0.004,
    upgradeAt: 69500,
    priceToUpgrade: 118,
  },
  {
    id: 4,
    name: 'Enterprise 100k',
    playsAvailable: 100000,
    playsToStart: 69500,
    price: 197,
    extraPlaysPrice: 0.002,
    upgradeAt: 200000,
    priceToUpgrade: 200,
  },
  {
    id: 5,
    name: 'Enterprise 250k',
    playsAvailable: 250000,
    playsToStart: 200000,
    price: 397,
    extraPlaysPrice: 0.002,
    upgradeAt: 446000,
    priceToUpgrade: 392,
  },
  {
    id: 6,
    name: 'Enterprise 500k',
    playsAvailable: 500000,
    playsToStart: 446000,
    price: 789,
    extraPlaysPrice: 0.002,
    upgradeAt: 854000,
    priceToUpgrade: 708,
  },
  {
    id: 7,
    name: 'Enterprise 1M',
    playsAvailable: 1000000,
    playsToStart: 854000,
    price: 1497,
    extraPlaysPrice: 0.002,
    upgradeAt: 1700000,
    priceToUpgrade: 1400,
  },
  {
    id: 8,
    name: 'Enterprise 2M',
    playsAvailable: 2000000,
    playsToStart: 1700000,
    price: 2897,
    extraPlaysPrice: 0.002,
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
  const [currentPlansActive, setCurrentPlansActive] = useState('plansBrasil')
  const [cheapestPlanPriceTotal, setCheapestPlanPriceTotal] = useState(0)
  const [cycleStatedAt, setCycleStatedAt] = useState('')
  const [currentDate, setCurrentDate] = useState(
    new Date().toJSON().slice(0, 10),
  )
  const [consumption, setConsumption] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    setPlansList(plansBrasil)

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
        <div className="inputWrapper">
          <label htmlFor="pet-select">Tipos de planos:</label>
          <div className="tiersWrapper">
            <button
              className={currentPlansActive === 'plansBrasil' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setPlansList(plansBrasil)
                setCurrentPlansActive('plansBrasil')
              }}
            >
              Brasil
            </button>
            <button
              className={currentPlansActive === 'plansTier1' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setPlansList(plansTier1)
                setCurrentPlansActive('plansTier1')
              }}
            >
              Tier 1
            </button>
            <button
              className={currentPlansActive === 'plansTier2' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                setPlansList(plansTier2)
                setCurrentPlansActive('plansTier2')
              }}
            >
              Tier 2 (Latam)
            </button>
          </div>
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
                isCheapestPlan={isCheapestPlan}
                setCheapestPlanPriceTotal={setCheapestPlanPriceTotal}
                cheapestPlanPriceTotal={cheapestPlanPriceTotal}
                isBr={currentPlansActive === 'plansBrasil'}
              />
            )
          },
        )}
      </div>
    </HomeContainer>
  )
}
