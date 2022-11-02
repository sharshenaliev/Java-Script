var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const a = parseFloat(values[0])
const b = parseFloat(values[1])
const c = parseFloat(values[2])

const max = Math.max(a, b, c)
const min = Math.min(a, b, c)
const mean = a + b + c - max - min
let message
if (max >= mean + min) {
    message = "NAO FORMA TRIANGULO"
} else if (max * max == mean * mean + min * min) {
    message = "TRIANGULO RETANGULO"
} else if (max * max >= mean * mean + min * min) {
    message = "TRIANGULO OBTUSANGULO"
} else if (max * max <= mean * mean + min * min) {
    message = "TRIANGULO ACUTANGULO"
} else {
    
}
if  (a == b == c ) {
    message = message + "\n" + "TRIANGULO EQUILATERO"
} else if (a == b || a == c || b == c) {
    message = message + "\n" + "TRIANGULO ISOSCELES" 
} else {

}
console.log(message)