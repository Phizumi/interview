// // 任意属性，一定是其他类型的父类
// let p: { name: string, age: number, [key: string]: any} = {
//     name: 'jack',
//     age: 18,
//     gender: 'male'
// }
//
// // builtin types
// let e: Error = new Error('error')
// let d: Date = new Date()
// let r: RegExp = /\d+/
// let s: Set<number> = new Set([1, 2, 3])
// let m: Map<string, number> = new Map([['a', 1], ['b', 2]])
// let n: NodeList = document.querySelectorAll('div')
// let b: HTMLElement = document.body
// let f: File = new File(['hello'], 'hello.txt', {type: 'text/plain'})

// type KunBasicAbility = ['sing', 'dance', 'rap', 'basketball']
//
// type IKun = {
//   name: string,
//   hairstyle: string,
//   ability: KunBasicAbility | string[],
//   clothes: string,
//   sing?: () => void
//   dance?: () => void
//   rap?: () => void
//   basketball?: () => void
// }
//
// let k: IKun = {
//   name: 'Kun',
//   hairstyle: '中分',
//   ability: ['sing', 'dance', 'rap', 'basketball', '哎哟'],
//   clothes: '背带裤',
//   sing() {
//     console.log('唱')
//   },
//   dance() {
//     console.log('跳')
//   },
//   rap() {
//     console.log('rap')
//   },
//   basketball() {
//     console.log('篮球')
//   }
// }

// type Person = {
//   name: string,
//   age: number,
// }
//
// type Man = keyof Person
//
// let m: Man = 'name'
// console.log('m', m)

// type Keys = 'x' | 'y' | 'z'
//
// type oKeys = {
//   [key in Keys]: number
// }
// let o: oKeys = {
//   x: 1,
//   y: 2,
//   z: 3
// }
//
// console.log('o', o)

type Props = {
  a: number
  b: string
  c: boolean
}

// type ReadOnlyProps = Readonly<Props>
type ReadOnlyProps = {readonly [key in keyof Props]: Props[key]}

let p: ReadOnlyProps = {
  a: 1,
  b: '2',
  c: true
}
// p.a = 2
console.log('p', p)