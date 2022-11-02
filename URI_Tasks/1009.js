const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const num1 = parseFloat(lines[1])
const num2 = parseFloat(lines[2])
const sum = num1 + num2 * 0.15

console.log(`TOTAL = R$ ${sum.toFixed(2)}`)