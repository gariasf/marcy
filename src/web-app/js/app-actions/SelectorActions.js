import path     from 'path'
import fs       from 'fs'
import os       from 'os'

import app from './../app-core/app'

const defaultDir = os.homedir() // OS default user home directory

/**
 * Filters elements by extension
 * 
 * @param string element
 * @return boolean
 */
const isValidFile = function (element) {
    let extName = path.extname(element)

    return app.supportedExtensions.includes(extName)
}

/**
 * Filters elements by type (external call)
 * 
 * @param string dir
 * @return boolean
 */
const isDirectoryExt = function (dir, context) {
    var result = false

    try {
        result = fs.statSync(path.join(context, dir)).isDirectory()
    } catch (err) {
        return result
    }

    return result
}

/**
 * Filters elements by type
 * 
 * @param string dir
 * @return boolean
 */
const isDirectory = function (dir) {
    var result = false

    try {
        result = fs.statSync(path.join(this, dir)).isDirectory()
    } catch (err) {
        return result
    }

    return result
}

/**
 * Returns a filtered list of items contained by a folder
 * 
 * @param string dir
 * @return array
 */
const lsDir = function(dir) {
    var totalItems = []

    try {
        fs.readdir(dir, function(err, files) {
            if (err) {
                return null
            } else {
                totalItems.push(
                    ...files
                        .filter(isDirectory.bind(dir))      // Return directories
                        .concat(files.filter(isValidFile))) // And specific file extensions
            }
        })} catch (err) {
            return null
        }

    return totalItems

}



export default {
    lsDir,
    isValidFile,
    isDirectory,
    isDirectoryExt,

    defaultDir
}
