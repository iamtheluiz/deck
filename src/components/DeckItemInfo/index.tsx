import React, { useState, useEffect, FormEvent, useContext } from 'react'
import { FiX } from 'react-icons/fi'
import { DeckItem } from '../../@types/DeckItem'
import DeckContext from '../../contexts/Deck'

import { Modal, Close, Image, Details, InputContainer, InputField, Input, Label, Button } from './styles'

interface Props {
  item: DeckItem,
  onClick(): void
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dialog = require('electron').remote.dialog

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

  async function handleOpenDialog () {
    const { filePaths } = await dialog.showOpenDialog({ properties: ['openFile'] })

    setContent(filePaths[0])
  }

  return (
    <>
      <Modal>
        <Close onClick={onClick}>
          <FiX size={20} />
        </Close>
        <Details onSubmit={handleSubmit}>
          <InputContainer>
            {icon && <Image src={icon} />}
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

            <br />
            <InputField>
              <Label htmlFor="content">Content</Label>
              <Input
                type="text"
                value={content}
                disabled
              />
            </InputField>
            {item.type === 'Program' && (
              <Button onClick={handleOpenDialog}>Select Program</Button>
            )}
          </InputContainer>

          <Button type="submit">Enviar</Button>
        </Details>
      </Modal>
    </>
  )
}

export default DeckItemInfo
