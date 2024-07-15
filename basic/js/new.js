// 1. create a new empty object
// 2. obj.__proto__ = fn.prototype
// 3. execute the constructor and make `this` refer to the new object
// 4. handle the return value of the constructor

function _new(fn, ...args) {
  // const obj = Object.create(fn.prototype)
  // const obj = { __proto__: fn.prototype }
  const obj = {}
  // Object.setPrototypeOf(obj, fn.prototype)
  obj.__proto__ = fn.prototype
  const res = fn.apply(obj, args)
  return res instanceof Object ? res : obj
}

function Person(name) {
  this.name = name
}

Person.prototype.say = function () {
  console.log(`my name is ${this.name}`)
}

const p = _new(Person, 'tom')
p.say()