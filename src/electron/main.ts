import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as fs from 'fs';
import log from 'electron-log';

log.info(`${app.name} ${app.getVersion()}`);

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});

// Electron -> Angular
ipcMain.handle('getPirates', () => {
  const result = fs.readFileSync(__dirname + '/assets/pirates.json');
  return JSON.parse(result.toString());
});

// Angular -> Electron
ipcMain.on('selectPirate', async (event: Electron.IpcMainEvent, name: string) => {
    await dialog.showMessageBox({ message: 'You selected: ' + name });
    event.returnValue = true;
});
