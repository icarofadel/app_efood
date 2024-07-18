import { HeaderBar, Logo, NavBar, Title } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => {
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
              <span>0 produto(s) no carrinho</span>
            </NavBar>
          </>
        )}
      </div>
    </HeaderBar>
  )
}

export default Header
