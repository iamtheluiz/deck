import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { DeckItem } from '../@types/DeckItem'

interface DeckContextData {
  items: DeckItem[],
  setItems(arg0: DeckItem[]): void,
  addNewCommand(arg0: number, arg1: DeckItem, arg2: string): void,
  updateCommand(arg0: DeckItem): void
}

const DeckContext = React.createContext<DeckContextData>({} as DeckContextData)

export const DeckProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<DeckItem[]>([])

  useEffect(() => {
    api.get('/').then(response => {
      setItems(response.data)
    })
  }, [])

  function addNewCommand (position: number, command: DeckItem, type: string) {
    api.post('/command', { position, ...command, type })
      .then(({ data }) => {
        setItems(data)
      })
  }

  function updateCommand (command: DeckItem) {
    api.put('/command', command)
      .then(({ data }) => {
        setItems(data)
      })
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
