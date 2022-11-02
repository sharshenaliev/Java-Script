const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const num1 = parseInt(lines[0])
const num2 = parseInt(lines[1])
const num3 = parseFloat(lines[2])
const sum = num2 * num3 

console.log("NUMBER = " + num1 + "\n" +
            "SALARY = U$ " + sum.toFixed(2))