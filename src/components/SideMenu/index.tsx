import React from 'react'
import {
  FiList,
  FiGitMerge,
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
        <MenuItem name="Features">
          <FiList size={30} />
        </MenuItem>
        <MenuItem name="Website">
          <FiGlobe size={30} />
        </MenuItem>
        <MenuItem name="Folder">
          <FiFolder size={30} />
        </MenuItem>
        <MenuItem name="Program">
          <FiMonitor size={30} />
        </MenuItem>
        <MenuItem name="Shortcut">
          <FiGitMerge size={30} />
        </MenuItem>
      </Menu>
      <Settings>
        <button onClick={handleNavigateToSettings}>
          <FiSettings size={30} />
        </button>
      </Settings>
    </Container>
  )
}

export default SideMenu
