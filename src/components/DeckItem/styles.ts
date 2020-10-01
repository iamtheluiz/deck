import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  50% {
    filter: brightness(1.2)
  }
`

export const Container = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none; /* Disable image drag */
  border-radius: 8px;
`
