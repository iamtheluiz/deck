import React, { useState, useEffect, useContext } from 'react';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/ui/dialog';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { Label } from '@/ui/label';

import { dialog } from '@electron/remote';
import DeckContext from '../../contexts/Deck';
import { DeckItem } from '../../../../@types/DeckItem';

interface Props {
  item: DeckItem;
  closeModal: () => void;
}

// eslint-disable-next-line react/function-component-definition
const DeckItemInfo: React.FC<Props> = ({ item, closeModal }) => {
  const { updateCommand } = useContext(DeckContext);
  const [name, setName] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const [content, setContent] = useState<any>('');

  useEffect(() => {
    setName(item.name ? item.name : '');
    setIcon(item.icon ? item.icon : '');
    setContent(item.content ? item.content : '');
  }, [item]);

  async function handleSubmit() {
    const command = {
      ...item,
      name,
      icon,
      content,
    };

    await updateCommand(command);
    closeModal();
  }

  async function handleOpenDialog() {
    const { filePaths } = await dialog.showOpenDialog({
      properties: ['openFile'],
    });
    setContent(filePaths[0]);
    // ipcRenderer.emit('deck-item-info-open-dialog');

    // ipcRenderer.once('deck-item-info-dialog-selected-path', (arg) => {
    //   console.log(arg);
    //   setContent(arg);
    // });
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit item</DialogTitle>
        <DialogDescription>
          Change your deck item information.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          {icon && <img src={icon} alt="" className="w-32 m-auto" />}
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(event: any) => {
              setName(event.target.value);
            }}
          />
          <Label htmlFor="icon">Icon</Label>
          <Input
            id="icon"
            type="text"
            value={icon}
            onChange={(event: any) => {
              setIcon(event.target.value);
            }}
          />
          <Label htmlFor="content">
            {item.type === 'Program' ? 'Path' : 'Content'}
          </Label>
          <Input
            id="content"
            type="text"
            value={content}
            onChange={(event: any) => {
              setContent(event.target.value);
            }}
          />
          {item.type === 'Program' && (
            <Button onClick={handleOpenDialog}>Select Program</Button>
          )}
        </div>
      </div>
      <DialogFooter className="justify-end">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
        <Button type="button" variant="default" onClick={handleSubmit}>
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeckItemInfo;
