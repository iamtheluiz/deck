import React, { useContext, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import DeckContext from '../../contexts/Deck';

import { DeckItem } from '../../../../@types/DeckItem';

// Components
import SideMenu from '../../components/SideMenu';
import DeckItemComponent from '../../components/DeckItem';
import DeckItemInfo from '../../components/DeckItemInfo';

// eslint-disable-next-line react/function-component-definition
const Main: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<DeckItem | null>(null);

  const { items } = useContext(DeckContext);

  return (
    <div className="flex h-full flex-row">
      <SideMenu />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-center items-center flex-1 h-full w-full">
          <div className="grid grid-cols-5 grid-rows-4 gap-2 w-[638px]">
            {items.map((item, index) => (
              <DeckItemComponent
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                onClick={() => setSelectedItem(item)}
                item={item}
                position={index}
              />
            ))}
          </div>
          <Dialog
            open={!!selectedItem}
            onOpenChange={(status) =>
              setSelectedItem(status === false ? null : selectedItem)
            }
          >
            {selectedItem && (
              <DeckItemInfo
                item={selectedItem}
                closeModal={() => setSelectedItem(null)}
              />
            )}
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Main;
