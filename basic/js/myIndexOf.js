String.prototype.customIndexOf = function (searchValue, fromIndex = 0) {
  return customIndexOf(this, searchValue, fromIndex)
}

function customIndexOf(searchValue, fromIndex = 0) {
  // 确保从索引不小于0
  fromIndex = Math.max(fromIndex, 0)

  // 获取字符串的长度
  const strLength = str.length
  const searchLength = searchValue.length

  // 如果要查找的字符串为空，返回起始索引
  if (searchLength === 0) {
    return fromIndex
  }

  // 如果起始索引超出字符串长度，返回-1
  if (fromIndex >= strLength) {
    return -1
  }

  // 遍历主字符串
  for (let i = fromIndex; i <= strLength - searchLength; i++) {
    // 检查子字符串是否匹配
    if (str.substring(i, i + searchLength) === searchValue) {
      return i // 找到匹配，返回索引
    }
  }

  return -1 // 未找到匹配，返回-1
}
const str = 'Hello, world!'
console.log(customIndexOf('world')) // 输出: 7
console.log(customIndexOf('o')) // 输出: 4
console.log(customIndexOf('z')) // 输出: -1
console.log(customIndexOf('', 5)) // 输出: 5
