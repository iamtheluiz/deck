import React, { useState, useEffect } from 'react'
import api from '../services/api'

interface DeckItem {
  id?: number,
  icon?: string,
  name?: string,
}

interface DeckContextData {
  items: DeckItem[],
  setItems(arg0: DeckItem[]): void
  addNewCommand(arg0: number, arg1: DeckItem, arg2: string): void
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
        const commands = [...items]

        commands[position] = data

        setItems(commands)
      })
  }

  return (
    <DeckContext.Provider value={{
      items,
      setItems,
      addNewCommand
    }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckContext
