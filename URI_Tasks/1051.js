var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = parseFloat(lines[0])
let message, tax
if (salary >= 0 && salary <= 2000) {
    message = "Isento"
} else if (salary > 2000 && salary <= 3000) {
    newSalary = salary - 2000
    tax = newSalary / 100 * 8
    message = `R$ ${tax.toFixed(2)}`
} else if (salary > 3000 && salary <= 4500) {
    newSalary = salary - 3000
    tax =  80 + newSalary / 100 * 18
    message = `R$ ${tax.toFixed(2)}`
} else { 
    newSalary = salary - 4500
    tax =  80 + 270  + newSalary / 100 * 28
    message = `R$ ${tax.toFixed(2)}`
}

console.log(message)