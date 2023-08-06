import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { ProductAddToCartContainer, ProductContainer } from './styles'
import CoffeImage1 from '../../assets/coffe-1.png'

interface ProductProps {
  coffeName: string
  tag?: string
  description: string
  price: number
}

export function Product({ coffeName, tag, description, price }: ProductProps) {
  return (
    <ProductContainer>
      <img src={CoffeImage1} alt={coffeName} />
      <strong>{tag}</strong>
      <h3>{coffeName}</h3>
      <p>{description}</p>
      <ProductAddToCartContainer>
        <div>
          <span>R$</span>
          <b>{price}</b>
        </div>
        <span>
          <div className="iconWrapper">
            <Minus size={14} weight="bold" />
          </div>
          1
          <div className="iconWrapper">
            <Plus size={14} weight="bold" />
          </div>
        </span>
        <div className="addToCartButton">
          <ShoppingCart size={18} weight="fill" />
        </div>
      </ProductAddToCartContainer>
    </ProductContainer>
  )
}
