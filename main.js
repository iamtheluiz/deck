const { BrowserWindow, app } = require('electron');

require('./bin/www');

let mainWindow = null;

function main() {
  mainWindow = new BrowserWindow({
    resizable: true,
  });
  mainWindow.removeMenu();
  mainWindow.loadURL('http://localhost:3636');
  mainWindow.on('close', event => {
    mainWindow = null;
  });
}

app.on('ready', main);