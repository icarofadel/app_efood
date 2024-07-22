import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'

import CardapioList from '../../components/CardapioList'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <div>Carregando...</div>
  }

  const { cardapio } = restaurante

  return (
    <>
      <Header page="perfil" />
      <Banner banner={restaurante} />
      <CardapioList cardapio={cardapio} />
    </>
  )
}

export default Perfil
