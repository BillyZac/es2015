// By declaring a `static` method, the method gets attached directly to
// `Project` as a constructor function.
// We can call it on the constructor
class Project {
  static getDefaultId() {
    return 0
  }
}
console.log(Project.getDefaultId()) // 0

// But it doesn't work on the instance
class Project {
  static getDefaultId() {
    return 0
  }
}
p = new Project()
console.log(p.getDefaultId()) // Error


// `static` properties don't work
class Project {
  static let id = 0
}
console.log(Project.id) // Syntax error

// So do it like this
class Project {

}
Project.id = 99
console.log(Project.id) // 99
