import { useState } from 'react'
import { CardapioItem } from '../../pages/Home'
import Options from '../Cardapio'
import { ContainerOptions, List, Modal, ModalContent } from './styles'
import close from '../../assets/images/close.png'
import Button from '../Button'

type Props = {
  cardapio: CardapioItem[]
}

const CardapioList = ({ cardapio }: Props) => {
  const [modal, setModal] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState<CardapioItem | null>(
    null
  )

  const formataTexto = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const abrirModal = (item: CardapioItem) => {
    setItemSelecionado(item)
    setModal(true)
  }

  const fecharModal = () => {
    setModal(false)
    setItemSelecionado(null)
  }

  return (
    <>
      <ContainerOptions>
        <div className="container">
          <List>
            {cardapio.map((item) => (
              <Options
                key={item.id}
                foto={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                id={item.id}
                onMaisDetalhes={() => abrirModal(item)}
              />
            ))}
          </List>
        </div>
      </ContainerOptions>
      {itemSelecionado && (
        <Modal className={modal ? 'visivel' : ''}>
          <ModalContent>
            <header className="fechar">
              <img src={close} alt="Fechar" onClick={fecharModal} />
            </header>
            <div className="conteudo">
              <img
                src={itemSelecionado.foto}
                alt={`Imagem do item ${itemSelecionado.nome}`}
              />
              <div>
                <h2>{itemSelecionado.nome}</h2>
                <p>{itemSelecionado.descricao}</p>
                <p>{itemSelecionado.porcao}</p>
                <Button
                  type="button"
                  title={`Adicionar ao carrinho - ${formataTexto(
                    itemSelecionado.preco
                  )}`}
                >
                  {`Adicionar ao carrinho - ${formataTexto(
                    itemSelecionado.preco
                  )}`}
                </Button>
              </div>
            </div>
          </ModalContent>
          <div className="overlay" onClick={fecharModal}></div>
        </Modal>
      )}
    </>
  )
}

export default CardapioList
