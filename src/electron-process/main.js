'use strict'

process.env.NODE_ENV = 'production' // Drastically increase performances

const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
const path                                          = require('path')
const electron                                      = require('electron')
const minimist                                      = require('minimist')


const app           = electron.app           // Module to control application life.
const BrowserWindow = electron.BrowserWindow // Module to create native browser window.


const appRoot = path.resolve(__dirname, '../..') // root directory
const srcPath = path.join(appRoot, 'src')        // src directory

// Choose window start index depending on launch options
const commandline = minimist(process.argv.slice(2));
const appIndex = commandline.env === 'production' ? `file://${srcPath}/web-app/dist/index.html#/` : 'http://localhost:8080'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null


// Make the app a single-instance app (to avoid Database concurrency)
const shouldQuit = app.makeSingleInstance(() => {
    // Someone tried to run a second instance, we should focus our window.
    if(mainWindow) {
        if(mainWindow.isMinimized()) {mainWindow.restore() }
        mainWindow.show()
        mainWindow.focus()
    }
});

if (shouldQuit) {
    app.quit()
}

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
    
    // Browser Window options
    const mainWindowOption = {
        title          : 'Marcy',
        frame          : true,
        width          : 900,
        height         : 550,
        minWidth       : 900,
        minHeight      : 550,
        webPreferences : {
            experimentalFeatures: true,
            blinkFeatures  : 'OverlayScrollbars' // Enable overlay scrollbars} // Enable CSS grid property
        }
    };

    // Create the browser window
    mainWindow = new BrowserWindow(mainWindowOption)

    // ... and load our html page
    mainWindow.loadURL(appIndex)

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    if(commandline.env != 'production') {
        installExtension(VUEJS_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
        mainWindow.openDevTools()
    }
})
