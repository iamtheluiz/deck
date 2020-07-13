import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Constants'
import { FiChevronRight } from 'react-icons/fi'

import { Container, Text } from './styles'

interface Props {
  icon: unknown,
  name: string
}

const MenuItem: React.FC<Props> = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COMMAND, value: props.name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <Container ref={drag}>
      {props.name !== 'Features' && <FiChevronRight size={20} />}
      {props.icon}
      <Text>{props.name}</Text>
    </Container>
  )
}

export default MenuItem
