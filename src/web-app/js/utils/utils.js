import path    from 'path';
import fs      from 'fs';

/**
 * Parse an URI, encoding some characters
 *
 * @param string uri
 * @return string
 */
const parseUri = (uri) => {
    const root = process.platform === 'win32' ? '' : path.parse(uri).root
    const location = uri
        .split(path.sep)
        .map((d, i) => {
            return i === 0 ? d : encodeURIComponent(d)
        })
        .reduce((a, b) => path.join(a, b))
    return `file://${root}${location}`
};

export default {
    parseUri
}
