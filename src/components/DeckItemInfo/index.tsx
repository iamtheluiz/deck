import React, { useState, useEffect, FormEvent, useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { DeckItem } from '../../@types/DeckItem'
import DeckContext from '../../contexts/Deck'

import { Container, Close, Image, Details, InputField, Input, Label } from './styles'

interface Props {
  item: DeckItem,
  onClick(): void
}

const DeckItemInfo: React.FC<Props> = ({ item, onClick }) => {
  const { updateCommand } = useContext(DeckContext)
  const [name, setName] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [content, setContent] = useState<any>('')

  useEffect(() => {
    setName(item.name ? item.name : '')
    setIcon(item.icon ? item.icon : '')
    setContent(item.content ? item.content : '')
  }, [item])

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const command = {
      ...item,
      name,
      icon,
      content
    }

    updateCommand(command)
  }

  return (
    <Container>
      <Close onClick={onClick}>
        <FiX size={20} />
      </Close>
      { icon && <Image src={icon} />}
      <Details>
        <form onSubmit={handleSubmit}>
          <InputField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
            />
          </InputField>

          <InputField>
            <Label htmlFor="icon">Icon</Label>
            <Input
              type="text"
              value={icon}
              onChange={event => {
                setIcon(event.target.value)
              }}
            />
          </InputField>

          <InputField>
            <Label htmlFor="icon">Content</Label>
            <Input
              type="text"
              value={content}
              onChange={event => {
                setContent(event.target.value)
              }}
            />
          </InputField>

          <button type="submit">Enviar</button>
        </form>
      </Details>
    </Container>
  )
}

export default DeckItemInfo
