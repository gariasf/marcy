const globalShortcut = electron.remote.globalShortcut
const ipcRenderer    = electron.ipcRenderer

import app from '../app-core/app'
import Player from './../app-core/player'

const init = () => {
    Player.init() // Create Player instance
    start()       // Init marcy
}

const start = () => {
    ipcRenderer.send('appReady')
}

const restart = () => {
    ipcRenderer.send('appRestart')
}

export default {
    init,
    start,
    restart
}
