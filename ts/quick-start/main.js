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
var p = {
    a: 1,
    b: '2',
    c: true
};
// p.a = 2
console.log('p', p);
