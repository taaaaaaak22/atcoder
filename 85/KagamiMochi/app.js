const input = require('fs').readFileSync('/dev/stdin', 'utf8')
const inputArray = input
  .trim()
  .split('\n')
  .map((el) => Number(el))
inputArray.splice(0, 1)

const sortedArray = inputArray.sort((a, b) => b - a)
const uniqArray = [...new Set(sortedArray)]

console.log(uniqArray.length)
