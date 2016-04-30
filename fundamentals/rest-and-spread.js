'use strict'

// Rest: Gather parameters and put them into an array
// Spread: Spread out the elements in an array

var showCategories = function (productId, ...categories) {
  console.log(categories)
}
showCategories(123, 'chimps', 'gorillaz') // ['chimps', 'gorillaz']
showCategories(123) // []

// Spread is kind of the opposite of Rest. It takes an array and
// converts it into separate values.
// Here, it's passed as a list of parameters.
var prices = [12, 20, 18]
var maxPrice = Math.max(...prices)
console.log(maxPrice) // 20


// Spread works on a string
var maxCode = Math.max(...'43210')
console.log(maxCode) // 4
