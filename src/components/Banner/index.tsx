import { Restaurante } from '../../pages/Home'
import { Imagem, Regiao, Titulo } from './styles'

type Props = {
  banner: Restaurante
}

const Banner = ({ banner }: Props) => (
  <>
    <Imagem style={{ backgroundImage: `url(${banner.capa})` }}>
      <div className="container">
        <Regiao>{banner.tipo}</Regiao>
        <Titulo>{banner.titulo}</Titulo>
      </div>
    </Imagem>
  </>
)

export default Banner
