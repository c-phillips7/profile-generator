const fs = require('fs')

// write files
    // to create index.html file with generated string
const writeFile = fileContent => {
    return new Promise(( resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File written'
            });
        });
    });
};

//copying file
    // to copy style.css into directory with index.html
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', e => {
            if (e){
                reject(e);
                return;
            }

            resolve({
                ok: true,
                message: 'File coppied'
            });
        });
    });
};

module.exports = { writeFile, copyFile }