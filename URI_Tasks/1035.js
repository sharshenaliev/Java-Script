var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const a = parseInt(values[0])
const b = parseInt(values[1])
const c = parseInt(values[2])
const d = parseInt(values[3])

let message
if (b > c && d > a && (c + d) > (a + b) && c >= 0 && d >= 0 && a % 2 === 0) {
    message = "Valores aceitos"  
} else {
    message = "Valores nao aceitos"
}

console.log(message)