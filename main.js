const { app, BrowserWindow } = require("electron"); 
let win; 
function createWindow() { 
	win = new BrowserWindow({ width: 730, height: 1020, resizable: false, autoHideMenuBar: true});
	win.loadURL(`file://${__dirname}/index.html`); 
	win.on("closed", () => { win = null; }); 
} 
app.on("ready", createWindow); 
app.on("window-all-closed", () => { 
	if (process. platform !== "darwin") { 
		app. quit(); 
	} 
}); 
app.on("activate", () => { 
	if (win === null) { 
		createWindow(); 
	} 
});
//mainWindow.webContents.openDevTools()
//const templateMenu = [
//];

//const menu = Menu.buildFromTemplate(templateMenu);
//Menu.setApplicationMenu(menu);

//var Tray = require('tray');
//var appIcon = new Tray(__dirname + '/img/icon/icon_96x96.png');


