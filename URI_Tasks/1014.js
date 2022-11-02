const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const x = parseInt(lines[0])
const y = parseFloat(lines[1])

const z = x / y

console.log(z.toFixed(3) + " km/l")