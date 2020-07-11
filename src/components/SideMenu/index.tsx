import React from 'react'
import {
  FiList,
  FiChevronRight,
  FiGlobe,
  FiFolder,
  FiMonitor,
  FiSettings
} from 'react-icons/fi'

import { Container, Menu, MenuItem, MenuItemText, Settings } from './styles'

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <FiList size={30} />
          <MenuItemText>Features</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FiChevronRight size={20} />
          <FiGlobe size={30} />
          <MenuItemText>Website</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FiChevronRight size={20} />
          <FiFolder size={30} />
          <MenuItemText>Folder</MenuItemText>
        </MenuItem>
        <MenuItem>
          <FiChevronRight size={20} />
          <FiMonitor size={30} />
          <MenuItemText>Program</MenuItemText>
        </MenuItem>
      </Menu>
      <Settings>
        <FiSettings style={{ cursor: 'pointer' }} size={30} />
      </Settings>
    </Container>
  )
}

export default SideMenu
