var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(" ")
const startHour = parseInt(values[0])
const startMinute = parseInt(values[1])
const endHour = parseInt(values[2])
const endMinute = parseInt(values[3])


let Hours  
let Minutes  
if (startHour == endHour) {
    if (startMinute == endMinute) {
        Hours = 24
        Minutes = 0    
    } else if (startMinute < endMinute) {
        Hours = 24
        Minutes = endMinute - startMinute
    } else if (startMinute > endMinute) {
        Hours = 23
        Minutes = 60 - startMinute + endMinute 
    } 
} else if (startHour < endHour) {
    if (startMinute == endMinute) {
        Hours = endHour - startHour
        Minutes = 0    
    } else if (startMinute < endMinute) {
        Hours = endHour - startHour 
        Minutes = endMinute - startMinute
    } else if (startMinute > endMinute) {
        Hours = endHour - startHour - 1
        Minutes = 60 - startMinute + endMinute 
    } 
} else if (startHour > endHour) {
    if (startMinute == endMinute) {  
        Hours = 24 - startHour + endHour
        Minutes = 0    
    } else if (startMinute < endMinute) {
        Hours = 24 - startHour + endHour
        Minutes = endMinute - startMinute
    } else if (startMinute > endMinute) {
        Hours = 25 - startHour + endHour
        Minutes = 60 - startMinute + endMinute 
    }  
} 
console.log(`O JOGO DUROU ${Hours} HORA(S) E ${Minutes} MINUTO(S)`)