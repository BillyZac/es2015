class Task {
  showId() {
    console.log('99')
  }
}

let task = new Task()
task.showId() // 99

// The `class` syntax is equivalent to the ES5 syntax for protypes.
// Same as adding a method to the prototype
console.log(task.showId === Task.prototype.showId)


// contructor() gets called when we create a new instance of the object
class Task {
  constructor() {
    console.log('Constructing the class...')
  }
  showId() {
    console.log('99')
  }
}
let task = new Task() // 'Constructing the class...'


// Don't declare static variable within the class btn-secondary
class Task {
  let id = 99 // This throws a syntax error
  showId() {
    console.log('99')
  }
}


// Classes are not hoisted, so this would throw an error.
let task = new Task()
class Task {
  showId() {
    console.log('99')
  }
}


// Using `.call()` to instantiate a new object, ES5 style
let Task = function() {
  console.log('Constructing the class...')
}
let task = {} // Start with an empty object, then...
Task.call(task) // `task` becomes `this` within the function body of `Task`
// This seems weird to me. Why would you do this?

// But .call() does not work with ES2015
class Task {
  constructor() {
    console.log('Constructing the class...')
  }
}
let task = {}
Task.call(task) // Throws an error: class constructor cannot be called with the `new` keyword.
// Interesting. The engine thinks we're calling `new` when we use `.call()`


// In ES5, constructor functions are placed in the global space
function Project() {}
console.log(window.Project === Project) // true
// But in ES2015, they're not. `class` does not pollute the global name space.
class Task() {}
console.log(window.Task === Task) // false
