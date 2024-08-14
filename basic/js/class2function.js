'use strict'

// class Example {
//   constructor(name) {
//     this.name = name
//   }

//   func() {
//     console.log(this.name)
//   }
// }

function Example(name) {
  // must to use `new`
  if (!(this instanceof Example)) {
    throw new Error("Class constructor P cannot be invoked without 'new'")
  }
  this.name = name
}

Object.defineProperty(Example.prototype, 'func', {
  value: function () {
    console.log('this', this)
    // can't use `new` to invoke func
    if (!(this instanceof Example)) {
      throw new Error('func is not a constructor')
    }
    console.log(this.name)
  },
  enumerable: false
})

// Example.prototype.func = function () {
//   console.log(this.name)
// }

const p = new Example('Awell')
p.func()
// for (const key in p) {
//   console.log('key', key)
// }
// console.log('🚀 ~ p:', p)
