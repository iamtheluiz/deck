import React, { useContext } from 'react'
import DeckContext from '../../contexts/Deck'

import {
  Container,
  DeckContainer,
  Deck
} from './styles'

import SideMenu from '../../components/SideMenu'
import DeckItem from '../../components/DeckItem'

const Main: React.FC = () => {
  const { items } = useContext(DeckContext)

  return (
    <Container>
      <DeckContainer>
        <Deck>
          {items.map((item, index) => (
            <DeckItem key={index} item={item} position={index} />
          ))}
        </Deck>
      </DeckContainer>
      <SideMenu />
    </Container>
  )
}

export default Main
