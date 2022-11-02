const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split("\n")

const radius = parseFloat(lines[0])
const pi = 3.14159
const area = pi * radius * radius 

console.log(`A=${area.toFixed(4)}`)