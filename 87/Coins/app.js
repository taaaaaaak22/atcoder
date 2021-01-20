const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputs = input.split('\n')
const coin500 = parseInt(inputs[0], 10)
const coin100 = parseInt(inputs[1], 10)
const coin50 = parseInt(inputs[2], 10)
const total = parseInt(inputs[3], 10)

let answer = 0
for (let i = 0; i <= coin500; i++) {
  for (let j = 0; j <= coin100; j++) {
    for (let k = 0; k <= coin50; k++) {
      const tmpTotal = i * 500 + j * 100 + k * 50
      if (tmpTotal === total) {
        answer++
      }
    }
  }
}

console.log(answer)
