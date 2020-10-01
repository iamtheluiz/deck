import styled from 'styled-components'

export const Container = styled.main<{ fade: boolean }>`
  display: flex;
  width: 100%;
  height: calc(100vh - 32px);
  align-items: center;
  filter: blur(${props => props.fade ? '5px' : '0px'});
`

export const DeckContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Deck = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 638px;
`
