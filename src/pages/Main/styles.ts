import styled from 'styled-components'

export const Container = styled.main<{ fade: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: calc(100vh - 32px);

  filter: blur(${props => props.fade ? '5px' : '0px'});
`

export const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 100%;
`

export const Deck = styled.div`
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 4px;

  width: 638px;
`
