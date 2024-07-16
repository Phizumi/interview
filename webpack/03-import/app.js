// import { name } from './module' // error
// import { name } from './module.js' // right
// console.log(name)


// import { lowercase } from './utils' // error
// import { lowercase } from './utils/main.js' // right
// console.log(lowercase('HELLO'))


// import { name } from 'module.js' // error, treated as three-part module
// import { name } from './module.js' // relative path
// import { name } from '/webpack/03-import/module.js' // absolute path
// import { name } from 'http://127.0.0.1:5500/webpack/03-import/module.js' // be able to access cdn files
// console.log(name)


// -----------------

// just execute
// import {} from './module.js'
// import './module.js'


// -----------------

// import whole module
// import * as mod from './module.js'
// console.log(mod.name)


// -----------------

// 2 error ways
// let modulePath = './module.js'
// import { name } from modulePath
// console.log(name)

// if (true) {
//   import { name } from './module.js'
// }


// dynamic import
// import('./module.js').then(mod => {
//   console.log(mod.name)
// })


// -----------------

// import title, { name, age } from './module.js'
import { name, age, default as title } from './module.js'
console.log(name, age, title)
