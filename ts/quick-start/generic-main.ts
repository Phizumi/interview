// 在定义函数、接口、或类的时候，不预先指定类型，而在使用的时候再指定类型
// 其实就是 类型参数
// 在定义的时候定义 形参，在使用的时候传入 实参

// basic usage
function getLength<T>(arg: T): number {
  return (arg as string).length
}
getLength<string>('hello')

// multiple generic parameters
function identity<T, U>(arg: T, arg2: U): T {
  return arg
}
identity(1, 'hello')

// use in interface
// interface IPerson<T> {
//   name: string
//   age: T
// }

// let p: IPerson<number> = {
//   name: 'Peter',
//   age: 18
// }
// console.log(p)

// 类型别名中使用 泛型
// type C<T> = { value: T }
// let obj: C<string> = { value: 'heihei' }

// 多个类型参数
// function arrTypeReverse<T, U>(arr: T[], f: (arg: T) => U): U[] {
//   return arr.map(f)
// }

// console.log(arrTypeReverse<string, number>(['1', '2', '3'], (i) => +i))

// class Person<T> {
//   name: T
//   age: number
//   constructor(name: T, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// 类型参数默认值
// class Person<T = string> {
//   list: T[] = []
//   add(el: T) {
//     this.list.push(el)
//   }
// }

// let foo = new Person<number | string>()
// foo.add(1)
// foo.add('2')

// generic 约束
// 大类型 extends 小类型
// function fn2<T extends string>(a: T) {
//   console.log(a.length)
//   return a
// }
// fn2<any>('123')

// let obj = {
//   name: 'Peter',
//   age: 18
// }

// function fn3<T extends keyof U, U>(key: T, obj: U) {
//   return obj[key]
// }
// fn3('age', obj)

// generic 嵌套
interface Box<T> {
  item: T
}

let b: Box<Box<string>> = {
  item: {
    item: 'hello'
  }
}
