const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const string1 = lines[0].split(' ')
const x1 = parseFloat(string1[0])
const y1 = parseFloat(string1[1])

const string2 = lines[1].split(' ')
const x2 = parseFloat(string2[0])
const y2 = parseFloat(string2[1])

const dist = Math.sqrt( (x2 - x1) ** 2 + ( y2 - y1 ) ** 2 ) 

console.log(dist.toFixed(4))