import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../Constants'
import DeckContext from '../../contexts/Deck'

import { Container, Image } from './styles'

interface DeckItem {
  id?: number,
  icon?: string,
  name?: string,
}

interface Props {
  item: DeckItem,
  position: number
}

const DeckItem: React.FC<Props> = ({ item, position }) => {
  const { addNewCommand } = useContext(DeckContext)

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.COMMAND,
    drop: item => addCommand(item),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  function addCommand (item: any) {
    const commandType = item.value

    addNewCommand(position, {
      id: Math.ceil(Math.random() * 100),
      name: '-',
      icon: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png'
    }, commandType)
  }

  return (
    <Container
      ref={drop}
      style={isOver ? {
        borderWidth: 2,
        borderColor: '#FFFFFF60',
        borderStyle: 'solid'
      } : {}}
    >
      {item.icon && (
        <Image src={item.icon} />
      )}
    </Container>
  )
}

export default DeckItem
