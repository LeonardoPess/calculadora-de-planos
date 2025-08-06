import { useEffect, useState } from 'react'

import { ChartBar } from 'phosphor-react'
import { HomeContainer, FormContainer } from './styles'
import { InformationsPlan } from '../../components/InformationsPlan'

const plansBrasil = [
  {
    id: 1,
    name: 'Basic',
    playsAvailable: 6000,
    playsToStart: 0,
    price: 97,
    extraPlaysPrice: 0.02,
    upgradeAt: 16000,
    priceToUpgrade: 200,
  },
  {
    id: 2,
    name: 'Pro',
    playsAvailable: 25000,
    playsToStart: 16000,
    price: 297,
    extraPlaysPrice: 0.02,
    upgradeAt: 40000,
    priceToUpgrade: 300,
  },
  {
    id: 3,
    name: 'Scale',
    playsAvailable: 50000,
    playsToStart: 40000,
    price: 597,
    extraPlaysPrice: 0.02,
    upgradeAt: 85000,
    priceToUpgrade: 700,
  },
  {
    id: 4,
    name: 'Enterprise 100k',
    playsAvailable: 100000,
    playsToStart: 85000,
    price: 1297,
    extraPlaysPrice: 0.014,
    upgradeAt: 221429,
    priceToUpgrade: 1700,
  },
  {
    id: 5,
    name: 'Enterprise 250k',
    playsAvailable: 250000,
    playsToStart: 221429,
    price: 2997,
    extraPlaysPrice: 0.014,
    upgradeAt: 464286,
    priceToUpgrade: 3000,
  },
  {
    id: 6,
    name: 'Enterprise 500k',
    playsAvailable: 500000,
    playsToStart: 464286,
    price: 5997,
    extraPlaysPrice: 0.014,
    upgradeAt: 857143,
    priceToUpgrade: 5000,
  },
  {
    id: 7,
    name: 'Enterprise 1m',
    playsAvailable: 1000000,
    playsToStart: 857143,
    price: 10997,
    extraPlaysPrice: 0.01,
    upgradeAt: 2000000,
    priceToUpgrade: 10000,
  },
  {
    id: 8,
    name: 'Enterprise 2mm',
    playsAvailable: 2000000,
    playsToStart: 200000,
    price: 20997,
    extraPlaysPrice: 0.01,
    upgradeAt: 2900000,
    priceToUpgrade: 9000,
  },
  {
    id: 9,
    name: 'Enterprise 3m',
    playsAvailable: 3000000,
    playsToStart: 2900000,
    price: 29997,
    extraPlaysPrice: 0.01,
    upgradeAt: 3900000,
    priceToUpgrade: 9000,
  },
  {
    id: 10,
    name: 'Enterprise 4m',
    playsAvailable: 4000000,
    playsToStart: 3900000,
    price: 38997,
    extraPlaysPrice: 0.01,
    upgradeAt: 4960000,
    priceToUpgrade: 9600,
  },
  {
    id: 11,
    name: 'Enterprise 5m',
    playsAvailable: 5000000,
    playsToStart: 4960000,
    price: 48597,
    extraPlaysPrice: 0.01,
    upgradeAt: Infinity,
    priceToUpgrade: 0,
  }
]

const plansBrasilLegacy = [
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
    upgradeAt: 950000,
    priceToUpgrade: 4500,
  },
  {
    id: 7,
    name: 'Enterprise 1m',
    playsAvailable: 1000000,
    playsToStart: 950000,
    price: 8997,
    extraPlaysPrice: 0.01,
    upgradeAt: 1700000,
    priceToUpgrade: 7000,
  },
  {
    id: 8,
    name: 'Enterprise 2m',
    playsAvailable: 2000000,
    playsToStart: 1050000,
    price: 15997,
    extraPlaysPrice: 0.01,
    upgradeAt: 2900000,
    priceToUpgrade: 5500,
  },
  {
    id: 9,
    name: 'Enterprise 3m',
    playsAvailable: 3000000,
    playsToStart: 2900000,
    price: 24997,
    extraPlaysPrice: 0,
    upgradeAt: Infinity,
    priceToUpgrade: 0,
  },
]

const plansTier1Legacy = [
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
    upgradeAt: 69800,
    priceToUpgrade: 198,
  },
  {
    id: 4,
    name: 'Enterprise 100k',
    playsAvailable: 100000,
    playsToStart: 69800,
    price: 397,
    extraPlaysPrice: 0.004,
    upgradeAt: 245000,
    priceToUpgrade: 580,
  },
  {
    id: 5,
    name: 'Enterprise 250k',
    playsAvailable: 250000,
    playsToStart: 245000,
    price: 977,
    extraPlaysPrice: 0.004,
    upgradeAt: 480000,
    priceToUpgrade: 920,
  },
  {
    id: 6,
    name: 'Enterprise 500k',
    playsAvailable: 500000,
    playsToStart: 480000,
    price: 1897,
    extraPlaysPrice: 0.004,
    upgradeAt: 925000,
    priceToUpgrade: 1700,
  },
  {
    id: 7,
    name: 'Enterprise 1m',
    playsAvailable: 1000000,
    playsToStart: 925000,
    price: 3597,
    extraPlaysPrice: 0.004,
    upgradeAt: 1850000,
    priceToUpgrade: 3400,
  },
  {
    id: 8,
    name: 'Enterprise 2m',
    playsAvailable: 2000000,
    playsToStart: 1850000,
    price: 6997,
    extraPlaysPrice: 0.004,
    upgradeAt: 1850000,
    priceToUpgrade: 2750000,
  },
  {
    id: 9,
    name: 'Enterprise 3m',
    playsAvailable: 3000000,
    playsToStart: 2750000,
    price: 9997,
    extraPlaysPrice: 0.004,
    upgradeAt: 3725000,
    priceToUpgrade: 3000,
  },
  {
    id: 10,
    name: 'Enterprise 4m',
    playsAvailable: 4000000,
    playsToStart: 3725000,
    price: 12897,
    extraPlaysPrice: 0.004,
    upgradeAt: 4725000,
    priceToUpgrade: 2900,
  },
  {
    id: 11,
    name: 'Enterprise 5m',
    playsAvailable: 5000000,
    playsToStart: 4725000,
    price: 15797,
    extraPlaysPrice: 0.004,
    upgradeAt: Infinity,
    priceToUpgrade: 0,
  },
]
const plansTier1 = [
  {
    id: 1,
    name: "Basic | 2k | A1 | T1",
    playsAvailable: 2000,
    playsToStart: 0,
    price: 29,
    extraPlaysPrice: 0,
    upgradeAt: 6000,
    priceToUpgrade: 50
  },
  {
    id: 2,
    name: "Pro | 6k | A1 | T1",
    playsAvailable: 6000,
    playsToStart: 2000,
    price: 79,
    extraPlaysPrice: 0,
    upgradeAt: 25000,
    priceToUpgrade: 100
  },
  {
    id: 3,
    name: "Scale | 30k | A1 | T1",
    playsAvailable: 30000,
    playsToStart: 6000,
    price: 299,
    extraPlaysPrice: 0,
    upgradeAt: 100000,
    priceToUpgrade: 400
  },
  {
    id: 4,
    name: "Enterprise 100k | A1 | T1",
    playsAvailable: 100000,
    playsToStart: 30000,
    price: 997,
    extraPlaysPrice: 0,
    upgradeAt: 250000,
    priceToUpgrade: 1500
  },
  {
    id: 5,
    name: "Enterprise 250k | A1 | T1",
    playsAvailable: 250000,
    playsToStart: 100000,
    price: 2497,
    extraPlaysPrice: 0,
    upgradeAt: 500000,
    priceToUpgrade: 3000
  },
  {
    id: 6,
    name: "Enterprise 500k | A1 | T1",
    playsAvailable: 500000,
    playsToStart: 250000,
    price: 4997,
    extraPlaysPrice: 0,
    upgradeAt: 1000000,
    priceToUpgrade: 5000
  },
  {
    id: 7,
    name: "Enterprise 1M | A1 | T1",
    playsAvailable: 1000000,
    playsToStart: 500000,
    price: 9997,
    extraPlaysPrice: 0,
    upgradeAt: 2000000,
    priceToUpgrade: 10000
  },
  {
    id: 8,
    name: "Enterprise 2M | A1 | T1",
    playsAvailable: 2000000,
    playsToStart: 1000000,
    price: 19997,
    extraPlaysPrice: 0,
    upgradeAt: 3000000,
    priceToUpgrade: 10000
  },
  {
    id: 9,
    name: "Enterprise 3M | A1 | T1",
    playsAvailable: 3000000,
    playsToStart: 2000000,
    price: 29997,
    extraPlaysPrice: 0,
    upgradeAt: 4000000,
    priceToUpgrade: 10000
  },
  {
    id: 10,
    name: "Enterprise 4M | A1 | T1",
    playsAvailable: 4000000,
    playsToStart: 3000000,
    price: 39997,
    extraPlaysPrice: 0,
    upgradeAt: 5000000,
    priceToUpgrade: 10000
  },
  {
    id: 11,
    name: "Enterprise 5M | A1 | T1",
    playsAvailable: 5000000,
    playsToStart: 4000000,
    price: 49997,
    extraPlaysPrice: 0,
    upgradeAt: 6000000,
    priceToUpgrade: 10000
  }
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
    upgradeAt: 2550000,
    priceToUpgrade: 1100,
  },
  {
    id: 9,
    name: 'Enterprise 3M',
    playsAvailable: 3000000,
    playsToStart: 2550000,
    price: 3997,
    extraPlaysPrice: 0.002,
    upgradeAt: 3500000,
    priceToUpgrade: 1000,
  },
  {
    id: 10,
    name: 'Enterprise 4M',
    playsAvailable: 4000000,
    playsToStart: 3500000,
    price: 4997,
    extraPlaysPrice: 0.002,
    upgradeAt: 4500000,
    priceToUpgrade: 1000,
  },
  {
    id: 11,
    name: 'Enterprise 5M',
    playsAvailable: 5000000,
    playsToStart: 4500000,
    price: 5997,
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
    <div>
      <strong style={{margin: '0 auto',display: 'block', textAlign: 'center'}}>{currentPlansActive == 'plansBrasil' && 'planos brasileiros a partir do final de 03/2024'}</strong>
      <strong style={{margin: '0 auto',display: 'block', textAlign: 'center'}}>{currentPlansActive == 'plansBrasilLegacy' && 'planos brasileiros antigos, até 03/2024'}</strong>
      <strong style={{margin: '0 auto',display: 'block', textAlign: 'center'}}>{currentPlansActive == 'plansTier1' && 'EUA, Canadá, Europa (exceto Rússia), Austrália, Nova Zelândia, Singapura, Japão, Coreia do Sul'}</strong>
      <strong style={{margin: '0 auto',display: 'block', textAlign: 'center'}}>{currentPlansActive == 'plansTier1Legacy' && 'Antigos planos: EUA, Canadá, Europa (exceto Rússia), Austrália, Nova Zelândia, Singapura, Japão, Coreia do Sul'}</strong>
      <strong style={{margin: '0 auto',display: 'block', textAlign: 'center'}}>{currentPlansActive == 'plansTier2' && 'América Latina, África, Países asiáticos não-ricos.'}</strong>
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
                className={currentPlansActive === 'plansBrasilLegacy' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setPlansList(plansBrasilLegacy)
                  setCurrentPlansActive('plansBrasilLegacy')
                }}
              >
                Brasil Legacy
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
                className={currentPlansActive === 'plansTier1Legacy' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setPlansList(plansTier1Legacy)
                  setCurrentPlansActive('plansTier1Legacy')
                }}
              >
                 Tier 1 Legacy
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
                  isBr={currentPlansActive === 'plansBrasil' || currentPlansActive === 'plansBrasilLegacy'}
                />
              )
            },
          )}
        </div>
      </HomeContainer>
    </div>
  )
}
