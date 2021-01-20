const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputArray = input.trim().split('')
let answer = 0
inputArray.forEach((val) => {
  answer += parseInt(val, 10)
})

console.log(answer)
