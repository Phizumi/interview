// 1. 类继承
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log('eating')
  }
}

class Student extends Person {
  grade: number
  study() {
    console.log('studying')
  }
}

const student = new Student('x', 18)
student.eat()
student.study()

// 2. 类型继承
interface Animal {
  name: string
}

interface Cat extends Animal {
  meow: () => void
}

let animal: Animal = {
  name: 'dog'
}

let cat: Cat = {
  name: 'kitty',
  meow: () => {
    console.log('meow')
  }
}

// 子类可以赋值给父类，反之不行
animal = cat
// cat = animal // 报错

// 条件类型
type Bool = Cat extends Animal ? 'yes' : 'no'
type Test<T> = T extends 'x' ? string : number

/**
 * 分配律
 *  当使用联合类型时，条件类型会遵循分配律
 */
type Result = Test<'x' | 'y'> // Result的类型为string | number

// 3. 泛型约束
function getInfo<T extends { name: string }>(obj: T): string {
  return obj.name
}

console.log(getInfo({ name: 'x', gender: 'male' }))
