var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const start = parseInt(values[0])
const end = parseInt(values[1])

let duration  
if (start == end) {
    duration = 24    
} else if (start < end) {
    duration = end - start
} else if (start > end) {
    duration = 24 - start + end 
} else {
    duration = 0 
}
console.log(`O JOGO DUROU ${duration} HORA(S)`)