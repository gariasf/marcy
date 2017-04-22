import path     from 'path';

const remote = electron.remote;
const app    = remote.app;

/*
 * Create necessary variables
 */
const browserWindows = {};
browserWindows.main = remote.getCurrentWindow();

/*
 * supported Formats
 */
const supportedExtensions = [
    // MP3 / MP4
    '.mp3',
    '.mp4',
    '.aac',
    '.m4a',
    '.3gp',
    '.wav',

    // Opus
    '.ogg',
    '.ogv',
    '.ogm',
    '.opus',

    // Flac
    '.flac'
];

export default {
    supportedExtensions,       // supported audio formats
    browserWindows,            // Object containing all the windows

    version: app.getVersion(), // Marcy version
};
