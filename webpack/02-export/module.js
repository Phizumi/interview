let name = 'hello module'

function hello() {
  console.log('hello')
}

class Person {}

// export {
//   name,
//   hello,
//   Person
// }

export {
  // name as default,
  hello as fooHello,
}

export default name