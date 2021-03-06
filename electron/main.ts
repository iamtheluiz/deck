/* eslint-disable no-unused-expressions */
import { app, BrowserWindow, nativeImage, Menu, Tray } from 'electron'
import * as path from 'path'
import * as url from 'url'

let mainWindow: Electron.BrowserWindow | null

require('../server/server')

function createWindow () {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/assets/icon.jpg`)

  if (app.dock) {
    app.dock.setIcon(icon)
  }

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

app.on('ready', () => {
  createWindow()
})

app.allowRendererProcessReuse = true
