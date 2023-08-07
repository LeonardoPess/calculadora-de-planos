import { useForm } from 'react-hook-form'
import { ChartBar } from 'phosphor-react'
import { HomeContainer } from './styles'

export function Home() {
  const { register, handleSubmit } = useForm()

  const date = new Date().toJSON().slice(0, 10)

  return (
    <>
      <HomeContainer>
        <p>Complete as informações</p>
        <div>
          <div className="titleBox">
            <ChartBar size={22} weight="bold" />
            <div>
              <h2>Consumo</h2>
            </div>
          </div>

          <div className="inputWrapper">
            <label htmlFor="">Início do Período:</label>
            <input type="date" value={date} />
          </div>
          <div className="inputWrapper">
            <label htmlFor="">Dia Atual:</label>
            <input type="date" value={date} />
          </div>
          <div className="inputWrapper">
            <label htmlFor="">Consumo (Período):</label>
            <input type="number" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="">Desconto:</label>
            <input type="number" />
          </div>
        </div>
      </HomeContainer>
    </>
  )
}
