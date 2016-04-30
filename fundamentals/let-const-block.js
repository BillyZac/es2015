'use strict'

let id = 12
console.log(id) // 12

let name = 'Bob'
{
  let name = 'Dob'
}
console.log(name) // Bob


{
  let count = 15
}
console.log(count) // Reference error: count is not defined


let i = 23
for (let i = 0; i < 66; i++)
{
}
console.log(i) // 23

/************/
// Closures with var vs let
let updateFunctions = []
for (var i = 0; i < 2; i++) {
  updateFunctions.push(function() { return i })
}
console.log(updateFunctions[0]()) // 2, because a closure is created over i

let updateFunctions = []
for (let i = 0; i < 2; i++) {
  updateFunctions.push(function() { return i })
}
console.log(updateFunctions[0]()) // 0


const MARKUP_PERCENT = 100
console.log(MARKUP_PERCENT) // 100
MARKUP_PERCENT = 10 // Type error
