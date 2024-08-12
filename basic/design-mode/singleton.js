// 1. constructor
function Person(name) {
  if (!Person.__instance) {
    this.name = name
    Person.__instance = this
  }
  return Person.__instance
}
const p1 = new Person('tom')
const p2 = new Person('jack')

// 2. 立即执行函数
// const Person = (function () {
//   function Person(name) {
//     this.name = name
//   }

//   let instance = null
//   return (...rest) => {
//     if (!instance) {
//       instance = new Person(rest)
//     }
//     return instance
//   }
// })()
// const p1 = Person('tom')
// const p2 = Person('jack')

console.log('🚀 ~ p1:', p1)
console.log('🚀 ~ p2:', p2)

console.log(p1 === p2)
