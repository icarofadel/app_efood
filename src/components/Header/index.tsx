import { HeaderBar, Logo, NavBar, Title, CartButton } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
    <HeaderBar>
      <div className="container">
        {page === 'home' && (
          <>
            <Logo>
              <img src={logo} alt={logo} />
            </Logo>
            <Title>
              Viva experiências gastronômicas no conforto da sua casa
            </Title>
          </>
        )}
        {page === 'perfil' && (
          <>
            <NavBar>
              <Link to={'/'}>Restaurantes</Link>
              <Logo>
                <img src={logo} alt={logo} />
              </Logo>
              <CartButton onClick={openCart}>
                {prato.length} produto(s) no carrinho
              </CartButton>
            </NavBar>
          </>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
