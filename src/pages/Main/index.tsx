import React, { useContext, useState } from 'react'
import DeckContext from '../../contexts/Deck'
import { DeckItem } from '../../@types/DeckItem'

import {
  Container,
  DeckContainer,
  Deck
} from './styles'

import SideMenu from '../../components/SideMenu'
import DeckItemComponent from '../../components/DeckItem'
import DeckItemInfo from '../../components/DeckItemInfo'

const Main: React.FC = () => {
  const { items } = useContext(DeckContext)
  const [selectedItem, setSelectedItem] = useState<DeckItem | null>(null)

  return (
    <Container>
      <DeckContainer>
        <Deck>
          {items.map((item, index) => (
            <DeckItemComponent
              key={index}
              onClick={() => setSelectedItem(item)}
              item={item}
              position={index}
            />
          ))}
        </Deck>
        {selectedItem && (
          <DeckItemInfo item={selectedItem} onClick={() => setSelectedItem(null)} />
        )}
      </DeckContainer>
      <SideMenu />
    </Container>
  )
}

export default Main
