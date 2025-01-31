import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  braco: '#FFEBD9',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9',
  text: '#FFFFFF'
}

export const breakponints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
