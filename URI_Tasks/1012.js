const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')

const string = lines[0].split(' ')
const a = parseFloat(string[0])
const b = parseFloat(string[1])
const c = parseFloat(string[2])

const sqr1 = 0.5 * a * c
const sqr2 = c * c * 3.14159
const sqr3 = 0.5 * (a + b) * c
const sqr4 = b * b
const sqr5 = a * b

console.log("TRIANGULO: " + sqr1.toFixed(3) + "\n" +
            "CIRCULO: " + sqr2.toFixed(3) + "\n" +
            "TRAPEZIO: " + sqr3.toFixed(3) + "\n" +
            "QUADRADO: " + sqr4.toFixed(3) + "\n" +
            "RETANGULO: " + sqr5.toFixed(3))