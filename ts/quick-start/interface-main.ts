// difference between interface and type
// 1. interface can be extended, type cannot
// 2. interface can be merged, type cannot and throw an error
// 3. type 能够表示非对象类型，interface 只能表示对象类型
// 4. interface 不能包含属性映射(mapping)，type 可以

interface IPerson {
  name: string;
  age: number;
  gender: string;
  say(): string;
}

interface IBoy extends IPerson {
  height: number;
}

interface IGirl extends IPerson {
  weight: number;
}

let boy: IBoy = {
  name: 'Peter',
  age: 18,
  gender: 'male',
  height: 180,
  say() {
    return `my name is ${this.name}`
  }
}

let girl: IGirl = {
  name: 'Julia',
  age: 18,
  gender: 'female',
  weight: 50,
  say() {
    return `my name is ${this.name}`
  }
}

console.log(boy.say())
console.log(girl.say())

type Fn = () => number
function fn(m: Fn | undefined) {
  let num = m!()
  return +num
}