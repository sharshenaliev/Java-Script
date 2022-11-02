var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = parseFloat(lines[0])
let message

if (salary > 0 && salary <= 400) {
    Rate = salary / 100 * 15
    newSalary = salary + Rate
    message = `Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${Rate.toFixed(2)}
Em percentual: 15 %`
} else if (salary > 400 && salary <= 800) {
    Rate = salary / 100 * 12
    newSalary = salary + Rate
    message = `Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${Rate.toFixed(2)}
Em percentual: 12 %`
} else if (salary > 800 && salary <= 1200) {
    Rate = salary / 100 * 10
    newSalary = salary + Rate
    message = `Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${Rate.toFixed(2)}
Em percentual: 10 %`
} else if (salary > 1200 && salary <= 2000) {
    Rate = salary / 100 * 7
    newSalary = salary + Rate
    message = `Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${Rate.toFixed(2)}
Em percentual: 7 %`
} else {
    Rate = salary / 100 * 4
    newSalary = salary + Rate
    message = `Novo salario: ${newSalary.toFixed(2)}
Reajuste ganho: ${Rate.toFixed(2)}
Em percentual: 4 %`
}

console.log(message)