import { Link } from 'react-router-dom'

import CardapioList from '../../components/CardapioList'
import Cardapio from '../../models/cardapio'
import imagem3 from '../../assets/images/image 3.png'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { HeaderBar, NavBar } from '../../components/Header/styles'

const CardapioOptions: Cardapio[] = [
  {
    id: 1,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    imagem: imagem3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  }
]
const Perfil = () => (
  <>
    <HeaderBar>
      <NavBar>
        <Link to={'/'}>Restaurantes</Link>
        <Header />
        <span>0 produto(s) no carrinho</span>
      </NavBar>
    </HeaderBar>
    <Banner />
    <CardapioList title={''} cardapio={CardapioOptions} />
  </>
)

export default Perfil
