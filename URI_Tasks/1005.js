const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const num1 = parseFloat(lines[0])
const num2 = parseFloat(lines[1])
const sum = (num1 * 3.5  + num2 * 7.5) / 11

console.log(`MEDIA = ${sum.toFixed(5)}`)