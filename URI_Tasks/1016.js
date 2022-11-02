const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const x = parseInt(lines[0])

const y = x * 2

console.log(y + " minutos")