var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(" ")
const a = parseFloat(numbers[0])
const b = parseFloat(numbers[1])
const c = parseFloat(numbers[2])

const x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)  
const x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)

let sqrt = b * b - 4 * a * c
let denominator = 2 * a

let message
if (sqrt < 0 || denominator === 0) {
    message = "Impossivel calcular" 
} else {
    message = `R1 = ${x1.toFixed(5)}
R2 = ${x2.toFixed(5)}`   
}

console.log(message)