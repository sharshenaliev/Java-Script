var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const code = lines[0].trim()
const regionsForCodes = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte'
}

console.log(regionsForCodes[code] || 'DDD nao cadastrado')