const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const num1 = parseInt(lines[0]) 
const num2 = parseInt(lines[1]) 
const sum = num1 + num2 

console.log(`X = ${sum}`)