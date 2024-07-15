// The questions about `this` concern its reference within the context of a function.
// global `this` depends on environment，in browser which is Window, in node which is {}
// console.log(this) // Window or {}
// globalThis is a global object in all environments


// what does `this` of a function point to totally depends on how the function is invoked
// 1. new --> new Fn() --> new object
// 2. directly invoke --> fn() --> window
// 3. invoke as a method of an object --> obj.fn() --> obj
// 4. call, apply, bind --> fn.call(obj) --> obj


// manual implementation of call
Function.prototype.myCall = function(ctx, ...args) {
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx)
  const fn = this

  const key = Symbol('temp')
  // Object.defineProperty(ctx, key, {
  //   value: fn,
  //   enumerable: false
  // })
  ctx[key] = fn
  const result = ctx[key](...args)
  delete ctx[key]
  return result
}

function sum(a, b) {
  console.log(this)
  return a + b
}

const obj = {
  // [Symbol('temp')]: 'temp'
}

const res = sum.myCall(1, 1, 4)
// console.log(res)
// console.log(obj)