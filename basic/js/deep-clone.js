// function deepClone(obj) {
//   if (typeof obj !== 'object') {
//     return obj
//   }
//   const newObj = obj instanceof Array ? [] : {}
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepClone(obj[key])
//     }
//   }
//   return newObj
// }

// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// }

// let newObj = deepClone(obj)

// obj.b.c = '2'
// newObj.b.d.e = '3'

// console.log(obj)
// console.log(newObj)

/**
 * 循环引用
 */
const obj = {
  arr: [1, 2, 3],
  a: 4
}
obj.sub = obj
obj.arr.push(obj)
// console.log('obj', obj)

function deepClone(value) {
  const cache = new WeakMap()
  function __deepClone(value) {
    if (value === null || typeof value !== 'object') {
      return value
    }
    if (cache.has(value)) {
      return cache.get(value)
    }
    const result = Array.isArray(value) ? [] : {}
    cache.set(value, result)
    console.log('cache', cache)
    for (let key in value) {
      if (obj.hasOwnProperty(key)) {
        result[key] = __deepClone(value[key])
      }
    }
    return result
  }
  console.log('cache', cache)
  return __deepClone(value)
}

const newObj = deepClone(obj)
console.log(newObj.arr !== obj.arr)
console.log(newObj.sub !== obj.sub)
console.log(newObj.arr[3] !== obj)
console.log(newObj.arr[3] === newObj)
console.log('newObj', newObj)
