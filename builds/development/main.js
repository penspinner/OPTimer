// import electron from 'electron';
const electron = require('electron');

let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;
let app = electron.app;
let ipc = electron.ipcMain;
let appWindow, infoWindow;

let myAppMenu, menuTemplate;

function toggleWindow(whichWindow) 
{
  if (whichWindow.isVisible()) {
    whichWindow.hide();
  } else {
    whichWindow.show();
  }
}

function createWindow()
{
    appWindow = new BrowserWindow({show: false});

    appWindow.loadURL('file://' + __dirname + '/index.html');

    infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        show: false,
        frame: false
    });

    //   infoWindow.loadURL('file://' + __dirname + '/info.html');

    appWindow.once('ready-to-show', function() {
        appWindow.show();
    }); 

    ipc.on('openInfoWindow', function(event, arg){
        event.returnValue='';
        infoWindow.show();
    });

    ipc.on('closeInfoWindow', function(event, arg){
        event.returnValue='';
        infoWindow.hide();
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => 
{
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') 
    {
        app.quit();
    }
});

app.on('activate', () => 
{
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (appWindow === null) 
    {
        appWindow.show();
    }
});
