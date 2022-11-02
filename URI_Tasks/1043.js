var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const a = parseFloat(values[0])
const b = parseFloat(values[1])
const c = parseFloat(values[2])
 
if (a < b + c && b < a + c && c < a + b) {
    const p = a + b + c
    console.log(`Perimetro = ${p}`)
} else {
    const s = (a + b) / 2 * c  
    console.log(`Area = ${s}`)
}  