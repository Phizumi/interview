// 1. implement Pick
// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// 2. implement Readonly
// type MyReadonly<T> = {
//   readonly [P in keyof T]: T[P]
// }
// type TodoReadonly = MyReadonly<Todo>

// 3. tuple convert to object
// const cars = ['model-y', 'xiaomi', 'mazda']
// type TupleToObject<T extends readonly (keyof any)[]> = {
//   [P in T[number]]: P
// }
// const oCars: TupleToObject<typeof cars> = {
//   mazda: 'mazda',
//   'model-y': 'model-y',
//   xiaomi: 'xiaomi'
// }

// 4. implement First
// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never
// type head1 = First<arr1> // 应推导出 'a'
// type head2 = First<arr2> // 应推导出 3

// 5. implement Length
// const arr = ['a', 'b', 'c'] as const
// type Length<T extends readonly any[]> = T['length']
// const arrLen: Length<typeof arr> = 3

// 6. implement Exclude
// type MyExclude<T, U> = T extends U ? never : T
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// 7. implement Awaited
// type ExampleType = Promise<string>
// type MyAwaited<T> = T extends Promise<infer U> ? U : never
// type Result = MyAwaited<ExampleType> // string

// 8. implement If
// type If<C extends boolean, T, F> = C extends true ? T : F
// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'

// 9. implement Contact
// type Contact<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]
// type Result = Contact<[1], [2]> // expected to be [1, 2]

// 10. implement Includes
// 将元组转换一个value为true的对象
// type Includes<T extends any[], U> = {
//   [K in T[number]]: true
// }[U] extends true
//   ? true
//   : false

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// 11. implement Push
type Push<T extends unknown[], U> = [...T, U]
type Result = Push<[1, 2], '3'> // [1, 2, '3']
