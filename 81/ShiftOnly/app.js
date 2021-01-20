const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputs = input.split('\n')
let nums = inputs[1].split(' ')

let answer = 0
while (true) {
  let isEven = true
  let nextNums = []
  nums.forEach((val) => {
    const num = parseInt(val, 10)
    if (num % 2 !== 0) {
      isEven = false
    }
    nextNums.push(num / 2)
  })
  nums = nextNums

  if (isEven) {
    answer++
  } else {
    break
  }
}
console.log(answer)
