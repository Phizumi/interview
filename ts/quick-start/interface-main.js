// similarities between interface and type
// 1. stand for object and function
// 2. interface extend by `extends`, type extend by `&`, can be mixed

// differences between interface and type
// 1. interface can be merged when declare the same name, type cannot and throw an error
// 2. type can annotate non-object type(basic type, union type)，interface just annotate object type
// 3. interface can't use `keyof`(property mapping)，type can
var boy = {
  name: 'Peter',
  age: 18,
  gender: 'male',
  height: 180,
  say: function () {
    return 'my name is '.concat(this.name)
  }
}
var girl = {
  name: 'Julia',
  age: 18,
  gender: 'female',
  weight: 50,
  say: function () {
    return 'my name is '.concat(this.name)
  }
}
console.log(boy.say())
console.log(girl.say())
function fn(m) {
  var num = m()
  return +num
}
