var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const num1 = parseInt(values[0])
const num2 = parseInt(values[1])

let message
if (num1 % num2 === 0 || num2 % num1 === 0) {
    message = "Sao Multiplos"
} else { 
    message = "Nao sao Multiplos"
}

console.log(message)