const {marked} = require('marked');

module.exports = source => {
  // console.log(source)
  // return 'console.log("hello loader")'
  const html = marked(source)
  // console.log(html)
  // return `module.exports = ${JSON.stringify(html)}`
  // return `export default ${JSON.stringify(html)}`
  return html
}