import React, { useState, useEffect } from 'react'
import { DeckItem } from '../../@types/DeckItem'

import api from '../services/api'

interface DeckContextData {
  items: DeckItem[],
  setItems(commandList: DeckItem[]): void,
  addNewCommand(command: DeckItem): void,
  updateCommand(command: DeckItem): void
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

  return (
    <DeckContext.Provider value={{
      items,
      setItems,
      addNewCommand,
      updateCommand
    }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckContext
