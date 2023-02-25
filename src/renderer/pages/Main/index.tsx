import React, { useContext, useState } from 'react'
import { DeckItem } from '../../../@types/DeckItem'
import DeckContext from '../../contexts/Deck'

// Components
import SideMenu from '../../components/SideMenu'
import DeckItemComponent from '../../components/DeckItem'
import DeckItemInfo from '../../components/DeckItemInfo'

// Styles
import {
  Container,
  DeckContainer,
  Deck
} from './styles'

const Main: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DeckItem | null>(null)

  const { items } = useContext(DeckContext)

  return (
    <>
      {selectedItem && (
        <DeckItemInfo item={selectedItem} onClick={() => setSelectedItem(null)} />
      )}
      <Container fade={!!selectedItem}>
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
        </DeckContainer>
        <SideMenu />
      </Container>
    </>
  )
}

export default Main
