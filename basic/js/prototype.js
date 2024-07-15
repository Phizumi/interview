// prototype
// 1. a property of the function
// 2. a object
// 3. added by default when create a function

// __proto__
// 1. a property of the instance
// 2. equals to the prototype of the constructor


// prototype：在 js 中，每个对象都有一个内部属性 [[Prototype]]（常用 __proto__ 来访问），这个属性指向另一个对象，这个对象就是所谓的“原型”。
// 原型对象可以包含该对象可以继承的属性和方法。当一个对象在自身上找不到某个属性或方法时，会自动查找其原型上的属性或方法。


// prototype chain：这是由对象及其原型组成的链式结构。js 的对象系统基于原型继承，每个对象都有其原型，这个原型对象也有它自己的原型，以此类推，形成一个链条。
// 当试图访问一个对象的属性时，js 引擎会首先检查这个对象自身是否拥有这个属性；如果没有，就顺着原型链向上查找，直到找到属性或到达链的顶端（即 null，表示没有更多的原型）。


function test() {
  
}

test.age = 18

const t = new test()

console.dir(test)
console.log(test.age)
console.log(test.prototype)
console.log(t.__proto__ === test.prototype)