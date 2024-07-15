import { Link } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { HeaderBar, NavBar } from '../../components/Header/styles'

const Cardapio = () => (
  <>
    <HeaderBar>
      <NavBar>
        <Link to={'/'}>Restaurantes</Link>
        <Header />
        <span>0 produto(s) no carrinho</span>
      </NavBar>
    </HeaderBar>
    <Banner />
  </>
)

export default Cardapio
