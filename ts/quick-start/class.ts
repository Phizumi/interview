// type Gender = 1 | 0

// class Person {
//   constructor(public name: string, public age: number) {
//     this.name = name
//     this.age = age
//   }
//   static info() {
//     console.log('static method')
//   }
//   readonly gender: Gender = 0
// }

// class Student extends Person {
//   constructor(name: string, age: number, public grade: number) {
//     super(name, age)
//     this.grade = grade
//   }
// }

// const p1 = new Person('张三', 18)
// console.log('p1', p1)
// Person.info()

// const s1 = new Student('李四', 19, 1)
// console.log('🚀 ~ s1:', s1)

/**
 * abstract class
 */
// abstract class Person {
//   abstract face(): void
// }

// class Student extends Person {
//   face() {
//     console.log('face')
//   }
// }
// const s1 = new Student()
// s1.face()

/**
 * implements
 */
interface Person {
  name: string
  age: number
  eat(): void
}
interface Gender {
  gender: 1 | 0
}

class Student implements Person, Gender {
  constructor(public name: string, public age: number, readonly gender: 1 | 0) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log('eat')
  }
  growUp() {
    this.age++
  }
}

const s1 = new Student('张三', 18, 1)
console.log('🚀 ~ s1:', s1)
s1.growUp()
