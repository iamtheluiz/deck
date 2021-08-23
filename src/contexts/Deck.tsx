import React, { useState, useEffect } from 'react'
import { DeckItem } from '../../@types/DeckItem'

import api from '../services/api'

interface DeckContextData {
  items: DeckItem[],
  setItems(commandList: DeckItem[]): void,
  addNewCommand(command: DeckItem): Promise<void>,
  updateCommand(command: DeckItem): Promise<void>,
  removeCommand(command: DeckItem): Promise<void>
}

const DeckContext = React.createContext<DeckContextData>({} as DeckContextData)

export const DeckProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<DeckItem[]>([])

  useEffect(() => {
    async function getCommands () {
      const { data: commandList } = await api.get('/')

      setItems(commandList)
    }
    getCommands()
  }, [])

  async function addNewCommand (command: DeckItem) {
    const { data: updatedCommandList } = await api.post('/command', command)

    setItems(updatedCommandList)
  }

  async function updateCommand (command: DeckItem) {
    const { data: updatedCommandList } = await api.put('/command', command)

    setItems(updatedCommandList)
  }

  async function removeCommand (command: DeckItem) {
    const { data: updatedCommandList } = await api.delete(`/command/${command.position}`)

    setItems(updatedCommandList)
  }

  return (
    <DeckContext.Provider value={{
      items,
      setItems,
      addNewCommand,
      updateCommand,
      removeCommand
    }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckContext
