const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputArray = input.split(' ')
const a = parseInt(inputArray[0], 10)
const b = parseInt(inputArray[1], 10)
const c = a * b

let answer = 'Odd'
if (c % 2 === 0) {
  answer = 'Even'
}
console.log(answer)
