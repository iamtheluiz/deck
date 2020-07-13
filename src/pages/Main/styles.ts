import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: calc(100vh - 32px);
  align-items: center;
`

export const DeckContainer = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Deck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 630px;
`
