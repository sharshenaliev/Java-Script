const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')
 
const money = parseInt(lines[0])

const hundred = Math.trunc( money / 100 )
const fifty = Math.trunc( money % 100 / 50 )
const twenty = Math.trunc( money % 100 % 50 / 20 )
const ten = Math.trunc( money % 100 % 50 % 20 / 10 )
const five = Math.trunc( money % 100 % 50 % 20 % 10 / 5 ) 
const two = Math.trunc( money % 100 % 50 % 20 % 10 % 5 / 2 )
const one = ( money % 100 % 50 % 20 % 10 % 5 % 2 / 1 )
 
console.log(`${money}\n` + 
            `${hundred} nota(s) de R$ 100,00\n` + 
            `${fifty} nota(s) de R$ 50,00\n` +
            `${twenty} nota(s) de R$ 20,00\n` +
            `${ten} nota(s) de R$ 10,00\n` +
            `${five} nota(s) de R$ 5,00\n` +
            `${two} nota(s) de R$ 2,00\n` +
            `${one} nota(s) de R$ 1,00`)