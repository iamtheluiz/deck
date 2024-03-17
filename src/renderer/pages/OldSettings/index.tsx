import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import QRCode from 'qrcode.react';

import { LocalStyle, Container, QRCodeContainer } from './styles';

// eslint-disable-next-line react/function-component-definition
const Settings: React.FC = () => {
  const history = useHistory();
  const address = '192.168.0.100';

  function handleNavigateToHome() {
    history.push('/');
  }

  return (
    <>
      <LocalStyle />
      <Container>
        <header>
          <FiArrowLeft size={30} onClick={handleNavigateToHome} />
        </header>
        <QRCodeContainer>
          <QRCode value={`http://${address}:4531`} renderAs="svg" />
        </QRCodeContainer>
      </Container>
    </>
  );
};

export default Settings;
