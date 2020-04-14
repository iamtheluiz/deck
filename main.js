const { BrowserWindow, app, Tray, Menu } = require('electron');
const path = require('path');
require('./bin/www');

const applicationIcon = './build/icon.ico';

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    resizable: true,
    icon: applicationIcon
  });

  const applicationTray = new Tray(applicationIcon);

  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: 'Control',
      click: () => {
        mainWindow.loadURL('http://localhost:3636/admin');
      }
    },
    {
      label: 'Deck',
      click: () => {
        mainWindow.loadURL('http://localhost:3636/deck');
      }
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuiting = true
        app.quit()
      }
    }
  ]);

  applicationTray.setContextMenu(contextMenu);

  mainWindow.removeMenu();
  mainWindow.loadURL('http://localhost:3636');
  mainWindow.on('close', event => {
    mainWindow = null;
  });

  mainWindow.on('minimize', event => {
    event.preventDefault()
    mainWindow.hide()
  });

  applicationTray.on('double-click', () => {
    mainWindow.show();
  });

  mainWindow.on('show', () => {
    try {
      applicationTray.setHighlightMode('always')
    } catch (error) {}
  });
});