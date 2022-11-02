var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const num = parseFloat(lines[0])

let message 
if (num >= 0 && num <= 25)  {
    message = "Intervalo [0,25]"  
} else if (num > 25 && num <= 50) {
    message = "Intervalo (25,50]"
} else if (num > 50 && num <= 75) {
    message = "Intervalo (50,75]"
} else if (num > 75 && num <= 100 ) {
    message = "Intervalo (75,100]"
} else {
    message = "Fora de intervalo"
}

console.log(message)