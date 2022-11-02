const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const Pi = 3.14159
const R = parseInt(lines[0])
const Sum = 4/3 * Pi * R * R * R

console.log(`VOLUME = ${Sum.toFixed(3)}`)