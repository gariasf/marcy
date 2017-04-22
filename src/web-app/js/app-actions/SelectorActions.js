import path from 'path'
import fs   from 'fs'
import os   from 'os'

import app from './../app-core/app'


const defaultDir = os.homedir() // OS default user home directory
const fileRe     = new RegExp(app.supportedExtensions.join("|"), 'gi'); // Regex expression to filter the apps suported extensions out

/*
 * Returns files that have a specific extension
 * @param element - a directory listing element
 */
function fileFilter(element) {
    let extName = path.extname(element)
    return extName.match(fileRe)
};

/*
 * Returns a filtered list of items contained by a folder
 * @param dir - a directory path
 */
const lsDir = function(dir) {
    let totalItems;
    try {
        totalItems = (fs.readdirSync(dir)
                .filter(file => fs.statSync(path.join(dir, file)).isDirectory()) // Return directories
                .concat(fs.readdirSync(dir).filter(fileFilter))) // And specific file extensions
    } catch (err) {
        return null
    }
    return totalItems
}

export default {
    lsDir,

    defaultDir
}
