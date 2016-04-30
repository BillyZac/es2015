'use strict'

// Dispense with the boilerplate when assigning properties
// to variables within the context of the same name.
var price = 5
var quantity = 30
var productView = {
  price,
  quantity
}

// Same effect as using an arrow function,
// with respect to `this`
// Here, `this` refers to the context in which the function is invoked.
var price = 5
var quantity = 10
var productView = {
  price: 7,
  quantity: 1,
  calculateValue() {
    return this.price * this.quantity
  }
}
console.log(productView.calculateValue()) // 60

// Dynamic field names!
var field = 'dynamicField'
var price = 5
var productView = {
  [field + '-001']: price
}
console.log(productView) // {dynamicField-001: 5}

// and it works with method names too.
var method = 'doIt'
var productView = {
  [method + '-001']() {
    console.log('Inside that method, yeah.');
  }
}
productView['doIt-001']() // 'Inside that method, yeah.'

// Getter and setter
// 'get' and 'set' are native javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// I didn't know that!
var ident = 'productId'
var productView = {
  get [ident]() { return true},
  set [ident](value) {}
}
console.log(productView.productId) // true
