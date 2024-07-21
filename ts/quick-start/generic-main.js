// 在定义函数、接口、或类的时候，不预先指定类型，而在使用的时候再指定类型
// 其实就是 类型参数
// 在定义的时候定义 形参，在使用的时候传入 实参
// basic usage
function getLength(arg) {
    return arg.length;
}
getLength('hello');
// multiple generic parameters
function identity(arg, arg2) {
    return arg;
}
identity(1, 'hello');
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
var Person = /** @class */ (function () {
    function Person() {
        this.list = [];
    }
    Person.prototype.add = function (el) {
        this.list.push(el);
    };
    return Person;
}());
var foo = new Person();
foo.add(1);
foo.add('2');
