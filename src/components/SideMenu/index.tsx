import React from 'react'
import {
  FiList,
  FiChevronRight,
  FiGlobe,
  FiFolder,
  FiMonitor,
  FiSettings
} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import MenuItem from '../../components/MenuItem'

import { Container, Menu, Settings } from './styles'

const SideMenu: React.FC = () => {
  const history = useHistory()

  function handleNavigateToSettings () {
    history.push('/settings')
  }

  return (
    <Container>
      <Menu>
        <MenuItem icon={<FiList size={30} />} name="Features" />
        <MenuItem icon={<FiGlobe size={30} />} name="Website" />
        <MenuItem icon={<FiFolder size={30} />} name="Folder" />
        <MenuItem icon={<FiMonitor size={30} />} name="Program" />
      </Menu>
      <Settings>
        <FiSettings style={{ cursor: 'pointer' }} size={30} onClick={handleNavigateToSettings} />
      </Settings>
    </Container>
  )
}

export default SideMenu
