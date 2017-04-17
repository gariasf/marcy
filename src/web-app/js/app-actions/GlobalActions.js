const globalShortcut = electron.remote.globalShortcut
const ipcRenderer    = electron.ipcRenderer

import app from '../core/app'

const init = () => {
    // Init marcy
    start()
}

const start = () => {
    ipcRenderer.send('appReady')
};

const restart = () => {
    ipcRenderer.send('appRestart')
};

export default {
    init,
    start,

    app: {
        restart
    }
}
