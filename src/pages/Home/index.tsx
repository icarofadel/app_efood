import Restaurant from '../../models/restaurant'
import RestaurantsList from '../../components/RestaurantsList'

import imagem from '../../assets/images/imagem.png'
import imagem2 from '../../assets/images/image 1.png'
import star from '../../assets/images/estrela.png'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    imagem: imagem,
    infos: ['Destaque da semana'],
    category: 'Japonesa',
    title: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: '4.9',
    star: star
  },
  {
    id: 2,
    imagem: imagem2,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.9',
    star: star
  },
  {
    id: 3,
    imagem: imagem2,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.9',
    star: star
  },
  {
    id: 4,
    imagem: imagem2,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: '4.9',
    star: star
  }
]

const Home = () => (
  <>
    <RestaurantsList title="" restaurant={restaurantes} />
  </>
)

export default Home
