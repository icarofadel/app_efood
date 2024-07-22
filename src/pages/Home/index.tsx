import RestaurantsList from '../../components/RestaurantsList'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurantes(res))
    )
  }, [])

  return (
    <>
      <Header page={'home'} />
      <RestaurantsList restaurantes={restaurantes} />
    </>
  )
}

export default Home
