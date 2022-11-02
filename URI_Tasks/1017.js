const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const x = parseInt(lines[0])
const y = parseInt(lines[1])

const z = x * y / 12

console.log(z.toFixed(3))