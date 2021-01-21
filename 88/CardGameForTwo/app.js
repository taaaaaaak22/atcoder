const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const inputArray = input.split('\n')
let N = parseInt(inputArray[0], 10)
let aArray = inputArray[1].split(' ').map((el) => Number(el))

let turn = 0
let AlicePoint = 0
let BobPoint = 0

while (N > 0) {
  const max = Math.max.apply([], aArray)
  const index = aArray.indexOf(max)
  aArray.splice(index, 1)

  if (turn % 2 === 0) {
    AlicePoint += max
  } else {
    BobPoint += max
  }

  N = N - 1
  turn++
}

console.log(AlicePoint - BobPoint)
