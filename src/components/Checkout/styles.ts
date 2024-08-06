import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CampoForm = styled.div`
  color: ${cores.begeEscuro};

  > div {
    margin: 16px 0 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    color: ${cores.begeEscuro};
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin: 8px 0;
    display: block;
    color: ${cores.begeEscuro};
  }

  input,
  select {
    background-color: ${cores.begeEscuro};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.begeEscuro};
    width: 100%;

    &.error {
      border: 5px solid red;
    }

    &.end {
      margin-bottom: 16px;
    }
  }
`
