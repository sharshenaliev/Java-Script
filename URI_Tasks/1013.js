const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const string = lines[0].split(' ')
const a = parseInt(string[0])
const b = parseInt(string[1])
const c = parseInt(string[2])

const x = (a + b + Math.abs (a - b)) / 2
const y = (x + c + Math.abs (x - c)) / 2

console.log(y + " eh o maior")