// feature:
// 1. return different instance of class according to different params
// 2. split the creation and implement of object

// advantage:
// 1. good encapsulation & clear code structure
// 2. easy to extend

// shortcoming:
// 1. extra complexity of system design and abstraction

// function IPhone() {
//   this.name = 'IPhone'
// }

// function Xiaomi() {
//   this.name = 'Xiaomi'
// }

// 违法开闭原则的“对修改封闭”原则，如果要新增产品，需要修改工厂函数
// function factory(phone) {
//   switch (phone) {
//     case 'IPhone':
//       return new IPhone()
//     case 'Xiaomi':
//       return new Xiaomi()
//     default:
//       return null
//   }
// }

// const p1 = factory('IPhone')
// console.log(p1)
// const p2 = factory('Xiaomi')
// console.log(p2)

/**
 * factory method
 */
// function Factory(phone) {
//   if (this instanceof Factory && this[phone]) {
//     return new this[phone]()
//   } else {
//     console.log('no such phone')
//     return phone
//   }
// }

// Factory.prototype.IPhone = function () {
//   this.name = 'IPhone'
// }
// Factory.prototype.Xiaomi = function () {
//   this.name = 'Xiaomi'
// }
// const p1 = new Factory('IPhone')
// console.log(p1)
// const p2 = new Factory('Xiaomi')
// console.log(p2)

/**
 * abstract factory
 */
class Phone {
  constructor(brand) {
    this.brand = brand
  }
}

class IPhone extends Phone {
  constructor(name) {
    super('IPhone')
    this.name = name
  }
}

class Xiaomi extends Phone {
  constructor(name) {
    super('Xiaomi')
    this.name = name
  }
}

function factory(brand) {
  switch (brand) {
    case 'IPhone':
      return IPhone
    case 'Xiaomi':
      return Xiaomi
    default:
      throw new Error('no such phone')
  }
}

const IPhoneClass = factory('IPhone')
const XiaomiClass = factory('Xiaomi')
const p1 = new IPhoneClass('IPhone 14 Pro Max')
console.log(p1)
const p2 = new XiaomiClass('Xiaomi 13 Pro')
console.log(p2)

// const p3 = factory('Nothing')
