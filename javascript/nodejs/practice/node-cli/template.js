#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const type = process.argv[2];
const name = process.argv[3];
const directory = process.argv[4] || '/';


const htmlTemplate = `

`

const exist = (dir) => {
    try {
        fs.accessSync(dir, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK)
        return true;
    } catch (error) {
        return false
    }
}

const mkdirp = (dir) => {
    const dirname= path.relative('.' , path.normalize(dir))
    .split(path.sep)
    .filter(p => !!p);
    dirname.forEach((d, idx) => {
        const pathBuilder = dirname.slice(0, idx+1).join(path.sep);
        if (!exist(pathBuilder) ){
            fs.mkdirSync(pathBuilder);
        }
    })
}

const makeTemplate = () => {
    mkdirp(directory);
    if (type === 'html') {
        const pathToFile = path.join(directory, `${name}.html`)
        if (exist(pathToFile)) {
            console.error('이미 해당 파일이 존재한ㄷ.ㅏ')
        }else {
            fs.writeFileSync(pathToFile, htmlTemplate);
            console.log(pathToFile, '생성완료')
        }
    } else if (type === 'express-router') {
        const pathToFile = path.join(directory, `${name}.js`)
        if (exist(pathToFile)) {
            console.error('해당 파일이 이미 존재')
        } else {
            fs.writeFileSync(pathToFile, routerTemplate);
            console.log(pathToFile, '생성완료')
        }
    } else {
        console.error('html 또는 express-router 둘중하나를 입력하세욘')
    }
}

const program = () => {
    if (!type || !name) {
        console.log('사용방법: cli html|express-router 파일명 [생성경로]')
    }else {
        makeTemplate()
    }
}
program();

