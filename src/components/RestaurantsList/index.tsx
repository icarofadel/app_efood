import { Restaurante } from '../../pages/Home'
import Store from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurantes.map((restaurant) => (
          <Store
            key={restaurant.id}
            id={restaurant.id}
            titulo={restaurant.titulo}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantsList
