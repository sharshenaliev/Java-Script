var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const startDay = lines[0]
const start = lines[1].split(" : ")
const startHour = parseInt(start[0])
const startMinute = parseInt(start[1])
const startSecond = parseInt(start[2])
const endDay = lines[2]
const end = lines[3].split(" : ")
const endHour = parseInt(end[0])
const endMinute = parseInt(end[1])
const endSecond = parseInt(end[2])

let Days, Hours, Minutes, Seconds  
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
console.log()