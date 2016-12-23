import electron from 'electron';

let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;
let app = electron.app;
let ipc = electron.ipc;

let myAppMenu, menuTemplate;

function toggleWindow(whichWindow) {
  if (whichWindow.isVisible()) {
    whichWindow.hide();
  } else {
    whichWindow.show();
  }
}

app.on('ready', function() 
{
  var appWindow, infoWindow;
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
});