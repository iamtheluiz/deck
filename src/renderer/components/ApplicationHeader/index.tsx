import React from 'react';
import remote from '@electron/remote';
import { FiX, FiMinus, FiMaximize } from 'react-icons/fi';

import { Container, DragContainer, Button } from './styles';

// eslint-disable-next-line react/function-component-definition
const ApplicationHeader: React.FC = () => {
  function handleCloseWindow() {
    const window = remote.getCurrentWindow();

    window.close();
  }

  function handleMaximizeWindow() {
    console.log(remote);
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
    <Container>
      <DragContainer>
        <Button onClick={handleMinimizeWindow}>
          <FiMinus />
        </Button>
        <Button onClick={handleMaximizeWindow}>
          <FiMaximize />
        </Button>
        <Button onClick={handleCloseWindow}>
          <FiX />
        </Button>
      </DragContainer>
    </Container>
  );
};

export default ApplicationHeader;
