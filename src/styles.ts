import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  braco: '#FFEBD9',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
  }
`
