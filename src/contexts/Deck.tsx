import React, { useState, useEffect } from 'react'

interface DeckItem {
  id?: number,
  icon?: string,
  name?: string,
}

interface DeckContextData {
  items: DeckItem[],
  setItems(arg0: DeckItem[]): void
}

const DeckContext = React.createContext<DeckContextData>({} as DeckContextData)

export const DeckProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<DeckItem[]>([])

  useEffect(() => {
    const serializedItems: DeckItem[] = Array(20)

    // Insert default values
    serializedItems.fill({}, 0, 20)

    const response = [
      {
        id: 1,
        position: 1,
        name: 'twitch',
        icon: 'https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png'
      }
    ]

    // Define items from server
    response.map(item => {
      serializedItems[item.position - 1] = {
        ...item
      }
    })

    setItems(serializedItems)
  }, [])

  return (
    <DeckContext.Provider value={{
      items,
      setItems
    }}>
      {children}
    </DeckContext.Provider>
  )
}

export default DeckContext
