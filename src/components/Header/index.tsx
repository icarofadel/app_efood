import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => {
  const dispatch = useDispatch()
  const { prato } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div className="container">
        {page === 'home' && (
          <>
            <S.Logo>
              <img src={logo} alt={logo} />
            </S.Logo>
            <S.Title>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Title>
          </>
        )}
        {page === 'perfil' && (
          <>
            <S.NavBar>
              <Link to={'/'}>Restaurantes</Link>
              <S.Logo>
                <img src={logo} alt={logo} />
              </S.Logo>
              <S.CartButton onClick={openCart}>
                {prato.length} produto(s) no carrinho
              </S.CartButton>
            </S.NavBar>
          </>
        )}
      </div>
    </S.HeaderBar>
  )
}

export default Header
