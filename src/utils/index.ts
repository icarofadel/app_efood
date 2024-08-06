export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (prato: CardapioItem[]) => {
  return prato.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco!)
  }, 0)
}
