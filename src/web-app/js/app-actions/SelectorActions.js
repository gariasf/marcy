import path     from 'path'
import fs       from 'fs'
import os       from 'os'

import app from './../app-core/app'

const defaultDir = os.homedir() // OS default user home directory

/*
 * Filters files that have a specific extension
 * @param element element - a directory listing element
 * @return element
 */
const fileFilter = function (element) {
    let extName = path.extname(element)
    return app.supportedExtensions.includes(extName)
}

/*
 * Returns a filtered list of items contained by a folder
 * @param string dir - a directory path
 * @return array
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
