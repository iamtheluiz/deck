import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Constants'
import { FiChevronRight } from 'react-icons/fi'

import { Container, Text } from './styles'

interface Props {
  name: string
}

const MenuItem: React.FC<Props> = ({ name, children }) => {
  const [, drag] = useDrag({
    item: { type: ItemTypes.COMMAND, value: name, position: -1 },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <Container ref={drag}>
      {name !== 'Features' && <FiChevronRight size={20} />}
      {children}
      <Text>{name}</Text>
    </Container>
  )
}

export default MenuItem
