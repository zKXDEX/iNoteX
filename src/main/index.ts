import {createNote, deleteNote, getNotes, readNote, writeNote} from '@/lib'
const electron = require('electron')
import path, { join } from 'path'
const fs = require('fs');
const glasstron = require('glasstron');
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import icon from '../../resources/icon.png?asset'


electron.app.commandLine.appendSwitch("enable-transparent-visuals");
function createWindow(): void {

  const mainWindow = new glasstron.BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {icon}),
    center: true,
    title: 'iNoteX',
    frame: false,
    vibrancy: 'under-window',
    visualEffectState: 'active',
    titleBarStyle: 'hidden',
    backgroundColor: '#000000e1',
    trafficLightPosition: {x: 15, y: 10},
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.blurType = "acrylic";
  mainWindow.setBackgroundColor("#00000000");
  mainWindow.setBlur(true);

  if (process.platform === 'win32') {
    mainWindow.webContents.on('dom-ready', () => {
      mainWindow.webContents.insertCSS(`
        body {
          background-color: #000000a8 !important;
        }
      `);
    });
  }

  let DwmEnableBlurBehindWindow  = require('@tabby-gang/windows-blurbehind').DwmEnableBlurBehindWindow;

  DwmEnableBlurBehindWindow(mainWindow.getNativeWindowHandle(), true)




  mainWindow.on('ready-to-show', () => {
    if (process.env.APPDATA) {
      const sourcePath = path.join(__dirname, '../../resources', 'settings.json');
      const destinationPath = path.join(process.env.APPDATA, 'iNoteX', 'settings.json');
      if (!fs.existsSync(destinationPath)) {
        fs.copyFile(sourcePath, destinationPath, (err) => {
          if (err) {
            console.error('Error al copiar el archivo:', err);
          } else {
            console.log('Archivo copiado con éxito.');
          }
        });
      }

    }

    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron.app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  electron.app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  electron.ipcMain.handle('getNotes', (_, ...args: Parameters<GetNotes>) => getNotes(...args))
  electron.ipcMain.handle('readNote', (_, ...args: Parameters<ReadNote>) => readNote(...args))
  electron.ipcMain.handle('writeNote', (_, ...args: Parameters<WriteNote>) => writeNote(...args))
  electron.ipcMain.handle('createNote', (_, ...args: Parameters<CreateNote>) => createNote(...args))
  electron.ipcMain.handle('deleteNote', (_, ...args: Parameters<DeleteNote>) => deleteNote(...args))


  electron.ipcMain.on('updateSettings', (event, fontFamily) => {
    try {
      const settingsFilePath = path.join(electron.app.getPath("userData"), 'settings.json');
      console.log('settingsFilePath:', settingsFilePath);
      const settings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf8'));
      console.log('settings before:', settings);
      settings.font.family = fontFamily;
      console.log('settings after:', settings);
      fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
      event.reply('updateSettingsResponse', 'Settings updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
      event.reply('updateSettingsResponse', 'Error updating settings');
    }
  });

  electron.ipcMain.on('closeApp', () => electron.app.quit())
  electron.ipcMain.on('minimizeApp', () => electron.BrowserWindow.getFocusedWindow()?.minimize())
  electron.ipcMain.on('maximizeApp', () => {
    const win = electron.BrowserWindow.getFocusedWindow()
    if (win?.isMaximized()) {
      win.unmaximize()
    } else {
      win?.maximize()
    }
  })




  // IPC test
  createWindow()

  electron.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
