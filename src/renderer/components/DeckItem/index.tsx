import React, { useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DeckItem as DeckItemProps } from '../../../../@types/DeckItem';
import { ItemTypes } from '../../Constants';
import DeckContext from '../../contexts/Deck';
import mergeRefs from '../../utils/mergeRefs';

import { Container, Image } from './styles';

interface Props {
  item: DeckItemProps;
  position: number;
  onClick(): void;
}

// eslint-disable-next-line react/function-component-definition
const DeckItem: React.FC<Props> = ({ item, position, onClick }) => {
  const { addNewCommand, removeCommand } = useContext(DeckContext);

  async function addCommand(commandItem: any) {
    let command: DeckItemProps = { position };

    if (commandItem.position === -1) {
      // New Command
      command = {
        ...command,
        icon: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png',
        content: 'https://www.twitch.tv/',
        type: commandItem.value,
      };
    } else {
      // Moving Command
      const movedCommand = commandItem.value;

      command = {
        ...command,
        name: movedCommand.name,
        icon: movedCommand.icon,
        content: movedCommand.content,
        type: movedCommand.type,
      };
    }

    await addNewCommand(command);
  }

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.COMMAND,
    drop: (commandItem: { type: string; value: string; position: number }) =>
      addCommand(commandItem),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [, moveCommandDrag] = useDrag({
    type: ItemTypes.MOVE_COMMAND,
    item: { value: { ...item, position } },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });

  const [, moveCommandDrop] = useDrop({
    accept: ItemTypes.MOVE_COMMAND,
    drop: (value: { type: string; value: DeckItemProps }) => {
      // Moving to same DeckItem
      if (position === value.value.position) {
        return;
      }

      addCommand({ ...value, position }); // Create new command
      removeCommand(value.value); // Remove old command
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Container
      onClick={item.position !== -1 ? onClick : undefined}
      ref={
        item.position === -1
          ? mergeRefs(drop, moveCommandDrop)
          : mergeRefs(drop, moveCommandDrop, moveCommandDrag)
      }
      style={
        isOver
          ? {
              borderWidth: 2,
              borderColor: '#FFFFFF60',
              borderStyle: 'solid',
            }
          : {}
      }
    >
      {item.icon && <Image src={item.icon} />}
    </Container>
  );
};

export default DeckItem;
