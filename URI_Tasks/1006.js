const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const num1 = parseFloat(lines[0])
const num2 = parseFloat(lines[1])
const num3 = parseFloat(lines[2])
const sum = (num1 * 2 + num2 * 3 + num3 * 5) / 10 

console.log(`MEDIA = ${sum.toFixed(1)}`)