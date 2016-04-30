'use strict'

// Specify a default with the equals operator
var getProduct = function(productId = 1000) {
  console.log(productId);
}
getProduct() // 1000


// Specify two defaults, and override one
var getProduct = function(productId = 1000, type = 'software') {
  console.log(productId + ', ' + type);
}
getProduct(undefined, 'hardware') // 1000, hardware


// One param can depend upon another
var getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax)
}
getTotal(5.00) // 5.35

// You can use variable and functions within the function declaration,
// as long as they're within the context
var generateBaseTax = () => 0.07
var getTotal = function(price, tax = price * generateBaseTax()) {
  console.log(price + tax);
}
getTotal(5.00) // 5.35
