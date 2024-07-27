import Button from '../Button'

import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../CardapioList'

const Cart = () => {
  const { isOpen, prato } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return prato.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {prato.map((prato) => (
            <CartItem key={prato.id}>
              <img src={prato.foto} alt={prato.nome} />
              <div>
                <h3>{prato.nome}</h3>
                <span>{formataPreco(prato.preco)}</span>
              </div>
              <button onClick={() => removeItem(prato.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total <span>{formataPreco(getTotalPrice())}</span>{' '}
        </Prices>
        <Button
          type={'button'}
          title={'Clique aqui para continuar com a compra'}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
