import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  50% {
    filter: brightness(1.2)
  }
`

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

export const DeckItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  margin: 8px;
  border-radius: 8px;
  background-color: #00000055;
  cursor: pointer;
  animation: ${blink} 1.5s linear infinite;
`

export const DeckImage = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none; /* Disable image drag */
`
