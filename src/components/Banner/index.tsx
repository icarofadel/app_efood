import { Imagem, Regiao, Titulo } from './styles'

import imagem from '../../assets/images/imagem.png'

const Banner = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${imagem})` }}>
      <div>
        <Regiao>Italiana</Regiao>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </Imagem>
  </>
)

export default Banner
