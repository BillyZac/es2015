// Properties for class instances

// `this` is initialized in the `constructor` function.
class Project {
  constructor() {
    this.location = 'New Zealand'
  }
}
class BigProject extends Project {
  constructor() {
    super()
  }
}
let p = new BigProject()
console.log(p.location) // 'New Zealand'

// If you use `let`, `var`, or `const`, it is not accessible to the instance
class Project {
  constructor() {
    let location = 'New Zealand'
  }
}
class BigProject extends Project {
  constructor() {
    super()
  }
}
let p = new BigProject()
console.log(p.location) // undefined
