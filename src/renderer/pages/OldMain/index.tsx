import React, { useContext, useState } from 'react';
import DeckContext from '../../contexts/Deck';

import { DeckItem } from '../../../../@types/DeckItem';

// Components
import SideMenu from '../../components/SideMenu';
import DeckItemComponent from '../../components/DeckItem';
import DeckItemInfo from '../../components/DeckItemInfo';

// Styles
import { Container, DeckContainer, Deck } from './styles';

// eslint-disable-next-line react/function-component-definition
const Main: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DeckItem | null>(null);

  const { items } = useContext(DeckContext);

  return (
    <>
      {selectedItem && (
        <DeckItemInfo
          item={selectedItem}
          onClick={() => setSelectedItem(null)}
        />
      )}
      <div className="flex flex-row">
        <DeckContainer>
          <Deck>
            {items.map((item, index) => (
              <DeckItemComponent
                key={item.position}
                onClick={() => setSelectedItem(item)}
                item={item}
                position={index}
              />
            ))}
          </Deck>
        </DeckContainer>
        <SideMenu />
      </div>
    </>
  );
};

export default Main;
