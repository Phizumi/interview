// manual unshift
export default function unshift(array, ...items) {
  const length = array.length
  let i = length - 1
  while (i >= 0) {
    array[i + items.length] = array[i]
    i--
  }
  i = 0
  while (i < items.length) {
    array[i] = items[i]
    i++
  }
  return length + items.length
}

const items = [1, 2, 3]

// console.log(unshift(items, 4, 5, 6), items)

// prototype implement
Array.prototype.myUnshift = function () {
  // let len = arguments.length
  // for (let i = len; i >= 0, i--; ) {
  //   this.splice(0, 0, arguments[i])
  // }
  // return this.length

  let len = this.length
  let i = len - 1
  while (i >= 0) {
    this[i + arguments.length] = this[i]
    i--
  }
  i = 0
  while (i < arguments.length) {
    this[i] = arguments[i]
    i++
  }
}

console.log(items.myUnshift(4, 5, 6), items)
