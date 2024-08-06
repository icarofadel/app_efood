import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import Checkout from '../Checkout'

import { formataPreco, getTotalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false)
  const { isOpen, prato } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const paraContinue = () => {
    setIsCheckout(true)
  }

  const paraVoltarCarrinho = () => {
    setIsCheckout(false)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isCheckout ? (
          <Checkout onBackToCart={paraVoltarCarrinho} />
        ) : (
          <>
            {prato.length > 0 ? (
              <>
                <ul>
                  {prato.map((prato) => (
                    <S.CartItem key={prato.id}>
                      <img src={prato.foto} alt={prato.nome} />
                      <div>
                        <h3>{prato.nome}</h3>
                        <span>{formataPreco(prato.preco)}</span>
                      </div>
                      <button
                        onClick={() => removeItem(prato.id)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  Valor Total <span>{formataPreco(getTotalPrice(prato))}</span>
                </S.Prices>
                <Button
                  type={'button'}
                  title={'Clique aqui para continuar com a compra'}
                  onClick={paraContinue}
                >
                  Continuar com a entrega
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos um produto para
                continuar a compra
              </p>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
