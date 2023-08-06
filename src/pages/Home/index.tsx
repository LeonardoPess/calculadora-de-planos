import { HomeContainer, ProductsContainer } from './styles'
import bannerCoffe from '../../assets/banner-coffe.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Product } from '../../components/Product'

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <br />
          <div className="benefits">
            <span>
              <div className="iconCircleBackground">
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </span>
            <span>
              <div className="iconCircleBackground">
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </span>
            <span>
              <div className="iconCircleBackground">
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </span>
            <span>
              <div className="iconCircleBackground">
                <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </span>
          </div>
        </div>
        <div className="bannerWrapper">
          <img src={bannerCoffe} alt="Banner" />
        </div>
      </HomeContainer>

      <ProductsContainer>
        <h2>Nossos cafés</h2>

        <div>
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
          <Product
            coffeName="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
            tag="Tradicional"
          />
        </div>
      </ProductsContainer>
    </>
  )
}
