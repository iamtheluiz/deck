import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import QRCode from 'qrcode.react'
import ip from 'ip'

import {
  LocalStyle,
  Container,
  QRCodeContainer
} from './styles'

const address = ip.address()

const Settings: React.FC = () => {
  const history = useHistory()

  function handleNavigateToHome () {
    history.push('/')
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
  )
}

export default Settings
