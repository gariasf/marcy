import path     from 'path';

const remote = electron.remote;
const app    = remote.app;

/*
 * Create necessary variables
 */
const browserWindows = {};
browserWindows.main = remote.getCurrentWindow();

export default {
    browserWindows,            // Object containing all the windows
    version: app.getVersion(), // Marcy version
};
