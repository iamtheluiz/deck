import React from 'react';
import { useDrag } from 'react-dnd';
import { Button } from '@/ui/button';
import { ItemTypes } from '../../Constants';

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
    <Button variant="outline" ref={drag} className="gap-2 justify-start">
      {children}
      {name}
    </Button>
  );
};

export default MenuItem;
