import React from 'react';
import { useDrag } from 'react-dnd';
import { FiChevronRight } from 'react-icons/fi';
import { ItemTypes } from '../../Constants';

import { Container, Text } from './styles';

interface Props {
  name: string;
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const MenuItem: React.FC<Props> = ({ name, children }) => {
  const [, drag] = useDrag({
    type: ItemTypes.COMMAND,
    item: { value: name, position: -1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Container ref={drag}>
      {name !== 'Features' && <FiChevronRight size={20} />}
      {children}
      <Text>{name}</Text>
    </Container>
  );
};

export default MenuItem;
