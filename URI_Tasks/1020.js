const input = require('fs').readFileSync('/dev/stdin','utf8')
const lines = input.split('\n')
 
const age = parseInt(lines[0])

const years = Math.trunc( age / 365 )
const months = Math.trunc( age % 365 / 30 )
const days = ( age % 365 % 30 / 1 )

console.log(years + " ano(s)" + "\n" +
            months + " mes(es)" + "\n" +
            days + " dia(s)")