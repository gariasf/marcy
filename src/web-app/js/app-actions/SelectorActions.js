import fs from 'fs'
import path from 'path'
import os from 'os'

const defaultDir = os.homedir()

function fileFilter(element) {
  var extName = path.extname(element)
  return extName === '.mp3'
};


const lsDir = function (dir) {
    let totalItems;
    totalItems = (fs.readdirSync(dir).filter(file => fs.statSync(path.join(dir, file)).isDirectory()).concat(fs.readdirSync(dir).filter(fileFilter)))
    return totalItems
}

export default {
    lsDir,

    defaultDir
}
