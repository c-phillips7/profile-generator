const fs = requre('fs')

// write files
    // to create index.html file with generated string
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, e => {
        if (e) {
            reject(e);
            return;
        }
        resolve({
            ok: true,
            message: 'File written'
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