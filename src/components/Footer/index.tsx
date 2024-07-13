import { FooterBar, Text } from './styles'

import logo from '../../assets/images/logo.png'
import Redes from '../../assets/images/redes sociais.png'

const Footer = () => (
  <FooterBar>
    <div>
      <img src={logo} alt="efood" />
    </div>
    <div>
      <img src={Redes} alt="Redes Sociais" />
    </div>
    <div>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Text>
    </div>
  </FooterBar>
)

export default Footer
