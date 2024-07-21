// difference between interface and type
// 1. interface can be extended, type cannot
// 2. interface can be merged, type cannot and throw an error
// 3. type 能够表示非对象类型，interface 只能表示对象类型
// 4. interface 不能包含属性映射(mapping)，type 可以
var boy = {
    name: 'Peter',
    age: 18,
    gender: 'male',
    height: 180,
    say: function () {
        return "my name is ".concat(this.name);
    }
};
var girl = {
    name: 'Julia',
    age: 18,
    gender: 'female',
    weight: 50,
    say: function () {
        return "my name is ".concat(this.name);
    }
};
console.log(boy.say());
console.log(girl.say());
function fn(m) {
    var num = m();
    return +num;
}
