/**
 * 1. 原型链继承
 * 缺点：1. 引用类型的属性会被所有实例共享
 * */
// function Parent() {
//   this.name = 'parent'
//   this.play = [1, 2, 3]
// }
// function Child() {
//   this.name = 'child'
// }

// Parent.prototype.getName = function () {
//   return this.name
// }

// Child.prototype = new Parent()

// const child1 = new Child()
// const child2 = new Child()
// child2.play.push(4)
// console.log(child1.getName())
// console.log(child1.play)

/**
 * 2. 构造函数继承
 * 优点：1. 引用类型属性不共享
 * 缺点：1. 无法继承父类原型上的方法
 * */
// function Parent() {
//   this.name = 'parent'
//   this.play = [1, 2, 3]
//   this.getName = function () {
//     return this.name
//   }
// }

// Parent.prototype.anyProperty = 'this is an property from Parent'

// function Child() {
//   Parent.call(this)
//   this.name = 'child'
// }

// const child1 = new Child()
// const child2 = new Child()
// child2.play.push(4)
// console.log(child1.getName()) // child
// console.log(child1.play)
// console.log(child1.anyProperty) // 缺点

/**
 * 3. 组合继承
 * 优点：1. 可以继承父类原型上的方法
 * 缺点：1. 调用两次 Parent()
 * */
// function Parent() {
//   this.name = 'parent'
//   this.play = [1, 2, 3]
//   this.getName = function () {
//     return this.name
//   }
// }
// Parent.prototype.anyProperty = 'this is an property from Parent'

// function Child() {
//   Parent.call(this)
//   this.name = 'child'
// }

// Child.prototype = new Parent()

// const child1 = new Child()
// const child2 = new Child()
// child2.play.push(4)
// console.log(child1.getName()) // child
// console.log(child1.play)
// console.log(child1.anyProperty)
// console.log(child1.__proto__)

/**
 * 4. 寄生组合继承
 * 优点：只调用1次 Parent()
 * 缺点：Child.prototype 原始属性和方法丢失
 */
function Parent() {
  this.name = 'parent'
  this.play = [1, 2, 3]
  this.getName = function () {
    return this.name
  }
}
Parent.prototype.anyProperty = 'this is an property from Parent'
function Child() {
  Parent.call(this)
  this.name = 'child'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const child1 = new Child()
console.log(child1.getName())
console.log(child1.anyProperty)
console.log(child1.__proto__)
