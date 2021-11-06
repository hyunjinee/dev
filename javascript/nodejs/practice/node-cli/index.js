#! /usr/bin/env node
// console.log('hello cli')

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('예제가 재밌습니까? ', (answer) => {
    if (answer === 'y' ) {
        console.log('ㄳ')
    } else if (answer ==='n') {
        console.log('ㅈㅅ')
    } else {
        console.log('둘중하나만 입력해라')
    }
    rl.close()
})


