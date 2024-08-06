function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  const newObj = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
}

let newObj = deepClone(obj)

obj.b.c = '2'
newObj.b.d.e = '3'

console.log(obj)
console.log(newObj)
