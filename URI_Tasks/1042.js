var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const n1 = parseInt(values[0])
const n2 = parseInt(values[1])
const n3 = parseInt(values[2])

let max = Math.max(n1, n2, n3)
let min = Math.min(n1, n2, n3 )
let mean = n1 + n2 + n3 - max - min 

console.log(`${min}
${mean}
${max}

${n1}
${n2}
${n3}`)
