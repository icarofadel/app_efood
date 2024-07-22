import { Restaurante } from '../../pages/Home'
import Store from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantsList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
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
      </List>
    </div>
  </Container>
)

export default RestaurantsList
