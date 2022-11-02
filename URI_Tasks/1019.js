const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')
 
const time = parseInt(lines[0])

const hours = Math.trunc( time / 3600 )
const minutes = Math.trunc( time % 3600 / 60 )
const seconds = ( time % 3600 % 60 / 1 )

console.log(hours + ":" + minutes + ":" + seconds)