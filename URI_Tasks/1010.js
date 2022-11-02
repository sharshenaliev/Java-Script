const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n") 

const prod1 = lines[0].split(" ")
const num2 = parseInt(prod1[1])
const num3 = parseFloat(prod1[2])

const prod2 = lines[1].split(" ")
const num5 = parseInt(prod2[1])
const num6 = parseFloat(prod2[2])

const sum = num2 * num3 + num5 * num6 

console.log(`VALOR A PAGAR: R$ ${sum.toFixed(2)}`)