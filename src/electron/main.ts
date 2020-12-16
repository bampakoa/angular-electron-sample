import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as fs from 'fs';

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
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
ipcMain.on('selectPirate', (event: Electron.IpcMainEvent, name: string) => {
    dialog.showMessageBox({ message: 'You selected: ' + name });
    event.returnValue = true;
});
