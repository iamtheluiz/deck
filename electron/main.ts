import { app, BrowserWindow, nativeImage } from 'electron'
import * as path from 'path'
import * as url from 'url'
import './server'

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/assets/icon.jpg`)

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    minWidth: 1000,
    backgroundColor: '#16324F',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    frame: false,
    title: 'Deck',
    icon
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
