import styled, { createGlobalStyle } from 'styled-components'

export const LocalStyle = createGlobalStyle`
  main div svg {
    width: 256px;
    height: 256px;
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 32px);
  padding: 8px;
`

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`
