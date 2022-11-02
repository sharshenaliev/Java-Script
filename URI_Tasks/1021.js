var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const money = parseFloat(lines[0])
const wholePart = Math.trunc(money)

const hundred  = Math.trunc(wholePart / 100)
const fifty    = Math.trunc(wholePart % 100 / 50)
const twenty   = Math.trunc(wholePart % 100 % 50 / 20)
const ten      = Math.trunc(wholePart % 100 % 50 % 20 / 10)
const five     = Math.trunc(wholePart % 100 % 50 % 20 % 10 / 5) 
const two      = Math.trunc(wholePart % 100 % 50 % 20 % 10 % 5 / 2)
const one      = Math.trunc(wholePart % 100 % 50 % 20 % 10 % 5 % 2 / 1)
const rest = Math.trunc((money - wholePart) * 100)
const half     = Math.trunc(rest / 50)
const quarter  = Math.trunc(rest % 50 / 25)
const tens     = Math.trunc(rest % 50 % 25 / 10)
const fives    = Math.trunc(rest % 50 % 25 % 10 / 5) 
const ones     = Math.trunc(rest % 50 % 25 % 10 % 5 / 1)

console.log(`NOTAS:
${hundred} nota(s) de R$ 100.00
${fifty} nota(s) de R$ 50.00
${twenty} nota(s) de R$ 20.00
${ten} nota(s) de R$ 10.00
${five} nota(s) de R$ 5.00
${two} nota(s) de R$ 2.00
MOEDAS:
${one} moeda(s) de R$ 1.00
${half} moeda(s) de R$ 0.50
${quarter} moeda(s) de R$ 0.25
${tens} moeda(s) de R$ 0.10
${fives} moeda(s) de R$ 0.05
${ones} moeda(s) de R$ 0.01`)