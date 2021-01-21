const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputArray = input.trim().split(' ')
const N = parseInt(inputArray[0], 10)
const A = parseInt(inputArray[1], 10)
const B = parseInt(inputArray[2], 10)

let answer = 0
for (let i = 1; i <= N; i++) {
  const total = i
    .toString()
    .split('')
    .reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
  if (total >= A && total <= B) {
    answer += i
  }
}

console.log(answer)
