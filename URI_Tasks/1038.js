var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(" ")
const x = parseFloat(numbers[0])
const y = parseFloat(numbers[1])

let price 
switch(x) {
    case 1:
        price = y * 4
        break;
    case 2:
        price = y * 4.5
        break;
    case 3:
        price = y * 5
        break;
    case 4:
        price = y * 2
        break;
    case 5:
        price = y * 1.5
        break;
    default:
        break;
}
message = "Total: R$ " + price.toFixed(2)
console.log(message)