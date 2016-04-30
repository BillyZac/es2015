// Extend a prototype with `extends`
// Access a prototype function with `super`

// The proper pattern
// You need to call `super` if you extend with a constructor
class Project {
  constructor() {}
}
class SpecificProject extends Project {
  constructor() {
    super() // Without this line, it throws an error.
    console.log('contructing a specific project...');
  }
}
let p = new SpecificProject()


// Overwriting a method requires no special syntax
class Project {
  getCount() {
    return 50
  }
}
class SpecificProject extends Project {
  getCount() {
    return 66
  }
}
let p = new SpecificProject()
console.log(p.getCount()) // 66


// You can use `super` in an object literal
// as long as the prototype is set up right.
// Note: `Object.setPrototypeOf()` is ES2015 syntax
let project = {
  getCount() { return 50 }
}
let littleProject = {
  getCount() {
    return super.getCount() + 10
  }
}
Object.setPrototypeOf(littleProject, project)
console.log(littleProject.getCount()) // 60
