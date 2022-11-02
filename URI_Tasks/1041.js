var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const x = parseFloat(values[0])
const y = parseFloat(values[1])

let message
if (x === 0.0 && y === 0.0) {
    message = "Origem"
} else if (x === 0.0 && y !== 0.0) {
    message = "Eixo X"
} else if (y === 0.0 && x !== 0.0)  {
    message = "Eixo Y"
} else if (x >= 0.0 && y >= 0.0) {
    message = "Q1"
} else if (x <= 0.0 && y >= 0.0) {
    message = "Q2"
} else if (x <= 0.0 && y <= 0.0) {
    message = "Q3"
} else if (x >= 0.0 && y <= 0.0) {
    message = "Q4"
} 

console.log(message)