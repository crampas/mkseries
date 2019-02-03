function format4(n) {
    return ('0000' + n).substr(-4);
}

function extension(filename) {
    const extensionIndex = filename.lastIndexOf('.');
    return extensionIndex < 0 ? '' : filename.substr(extensionIndex);
}

function transformFilename(file, prefix, index) {
    const path = file.substr(0, file.lastIndexOf('/') + 1);
    const filename = file.substr(path.length);
    const filenameNew = `${prefix}.${format4(index)}${extension(filename)}`;
    return path + filenameNew;
}


module.exports = {format4, extension, transformFilename};