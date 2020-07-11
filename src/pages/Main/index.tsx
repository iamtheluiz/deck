import React, { useContext } from 'react'
import DeckContext from '../../contexts/Deck'

import {
  Container,
  DeckContainer,
  Deck,
  DeckItem,
  DeckImage
} from './styles'

import SideMenu from '../../components/SideMenu'

const Main: React.FC = () => {
  const { items } = useContext(DeckContext)

  return (
    <Container>
      <DeckContainer>
        <Deck>
          {items.map((item, index) => (
            <DeckItem key={index}>
              {item.icon && (
                <DeckImage src={item.icon} />
              )}
            </DeckItem>
          ))}
        </Deck>
      </DeckContainer>
      <SideMenu />
    </Container>
  )
}

export default Main
