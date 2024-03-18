import React, { ReactNode } from 'react';
import * as remote from '@electron/remote';
import { FiX, FiMinus, FiMaximize } from 'react-icons/fi';
import { Button } from '@/ui/button';

import DeckIcon from '../../../../assets/icon.jpg';

function NoDragButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className="h-8 w-8 p-2"
      variant="ghost"
      style={{
        // @ts-ignore
        WebkitAppRegion: 'no-drag',
      }}
    >
      {children}
    </Button>
  );
}

// eslint-disable-next-line react/function-component-definition
const ApplicationHeader: React.FC = () => {
  function handleCloseWindow() {
    const window = remote.getCurrentWindow();

    window.close();
  }

  function handleMaximizeWindow() {
    const window = remote.getCurrentWindow();

    if (!window.isMaximized()) {
      window.maximize();
    } else {
      window.unmaximize();
    }
  }

  function handleMinimizeWindow() {
    const window = remote.getCurrentWindow();

    window.minimize();
  }

  return (
    <div
      className="flex items-center w-full h-9 border-b border-input"
      style={{
        // @ts-ignore
        WebkitAppRegion: 'drag',
      }}
    >
      <div className="flex flex-row items-center flex-1 h-full pl-1">
        <img className="h-full w-auto p-1.5" src={DeckIcon} alt="" />
        <span className="text-sm text-muted-foreground font-semibold">
          Deck
        </span>
      </div>
      <NoDragButton onClick={handleMinimizeWindow}>
        <FiMinus />
      </NoDragButton>
      <NoDragButton onClick={handleMaximizeWindow}>
        <FiMaximize />
      </NoDragButton>
      <NoDragButton onClick={handleCloseWindow}>
        <FiX />
      </NoDragButton>
    </div>
  );
};

export default ApplicationHeader;
