'use strict'

// With one argument, you can leave off the parentheses
var getPrice = count => count * 4
console.log(getPrice(2)) // 8

// Need parentheses with more than one argument
var getPriceWithTax = (count, tax) => count * 4 * (1 + tax)
console.log(getPriceWithTax(2, .07)) // 8.56

// `this`, two ways
// In ES5, `this` gets set to the element that receives the event.
// We don't have access to the context of the function.
document.addEventListener('click', function() {
  console.log(this) // #document
})

// In ES 2015 we get the context of the code we're running,
// which in this case is the global space of the browser.
// If we were inside a function, we'd get the function's context.
document.addEventListener('click', () => {
  console.log(this) // Window {...}
})

var invoice = {
  number: 123,
  process: function() {
    return () => console.log(this.number) // 123
  }
}

// When using arrow functions, `bind` does not change the value of `this`
// In the code below, the javascript engine just ignores the .bind()
// It doesn't even throw an error.
var invoice = {
  number: 123,
  process: function() {
    return () => console.log(this.number)
  }
}
var newInvoice = {
  number: 456
}
invoice.process().bind(newInvoice)() // 123

// .call() is also useless with arrow functions
// Same applies to .apply()
var invoice = {
  number: 123,
  process: function() {
    return () => console.log(this.number)
  }
}
var newInvoice = {
  number: 456
}
invoice.process().call(newInvoice) // 123


// Can't put fat arrow on a new line. This throws an error:
var getPrice = ()
  => 5.99


// With fat arrows, we do not have access to a prototype field
var getPrice = () => 5.99
console.log(getPrice.hasOwnProperty('prototype'))
