import {
  FiGitMerge,
  FiGlobe,
  FiFolder,
  FiMonitor,
  FiSettings,
  FiTrash,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import DeckContext from 'renderer/contexts/Deck';
import { Button } from '@/ui/button';
import MenuItem from '../MenuItem';

export default function SideMenu() {
  const { resetCommandList } = useContext(DeckContext);
  const history = useHistory();

  function handleNavigateToSettings() {
    history.push('/settings');
  }

  async function handleRemoveAllCommands() {
    await resetCommandList();
  }

  return (
    <aside className="flex flex-col p-2 min-w-64 border-r border-input">
      <h3 className="mt-2 mb-2 scroll-m-20 text-xl font-semibold tracking-tight text-center">
        Commands
      </h3>
      <div className="flex flex-1 flex-col gap-1">
        <MenuItem name="Website">
          <FiGlobe size={16} />
        </MenuItem>
        <MenuItem name="Folder">
          <FiFolder size={16} />
        </MenuItem>
        <MenuItem name="Program">
          <FiMonitor size={16} />
        </MenuItem>
        <MenuItem name="Shortcut">
          <FiGitMerge size={16} />
        </MenuItem>
      </div>
      <div className="flex flex-row gap-1">
        <Button variant="outline" onClick={handleNavigateToSettings}>
          <FiSettings size={16} />
        </Button>
        <Button variant="outline" onClick={handleRemoveAllCommands}>
          <FiTrash size={16} />
        </Button>
      </div>
    </aside>
  );
}
