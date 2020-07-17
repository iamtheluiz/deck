import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../Constants'
import DeckContext from '../../contexts/Deck'

import { Container, Image } from './styles'

interface DeckItem {
  icon?: string,
  name?: string,
  content?: any
}

interface Props {
  item: DeckItem,
  position: number,
  onClick(): void
}

const DeckItem: React.FC<Props> = ({ item, position, onClick }) => {
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
      name: '-',
      icon: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png',
      content: 'https://www.twitch.tv/'
    }, commandType)
  }

  return (
    <Container
      ref={drop}
      onClick={item.name ? onClick : () => {}}
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
