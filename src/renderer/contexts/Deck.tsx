/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import api from '../services/api';
import { DeckItem } from '../../../@types/DeckItem';

interface DeckContextData {
  items: DeckItem[];
  setItems(commandList: DeckItem[]): void;
  executeCommand(command: DeckItem): Promise<void>;
  addNewCommand(command: DeckItem): Promise<void>;
  updateCommand(command: DeckItem): Promise<void>;
  removeCommand(command: DeckItem): Promise<void>;
  resetCommandList(): Promise<void>;
}

const DeckContext = React.createContext<DeckContextData>({} as DeckContextData);

// eslint-disable-next-line react/function-component-definition
export function DeckProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<DeckItem[]>([]);

  useEffect(() => {
    async function getCommands() {
      const { data: commandList } = await api.get('/');

      setItems(commandList);
    }
    getCommands();
  }, []);

  async function executeCommand(command: DeckItem) {
    await api.get(`/execute/${command.position}`);
  }

  async function addNewCommand(command: DeckItem) {
    const { data: updatedCommandList } = await api.post('/command', command);

    setItems(updatedCommandList);
  }

  async function updateCommand(command: DeckItem) {
    const { data: updatedCommandList } = await api.put('/command', command);

    setItems(updatedCommandList);
  }

  async function removeCommand(command: DeckItem) {
    const { data: updatedCommandList } = await api.delete(
      `/command/${command.position}`
    );

    setItems(updatedCommandList);
  }

  async function resetCommandList() {
    const { data: updatedCommandList } = await api.post(`/command/reset`);

    setItems(updatedCommandList);
  }

  return (
    <DeckContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        items,
        setItems,
        executeCommand,
        addNewCommand,
        updateCommand,
        removeCommand,
        resetCommandList,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}

export default DeckContext;
