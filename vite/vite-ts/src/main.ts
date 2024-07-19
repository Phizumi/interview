import { forEach } from 'lodash'


export const mainArr = [1, 2, 3]
forEach(mainArr, el => {
    console.log('el', el)
})

console.log('env', import.meta.env.VITE_APP_KEY)

let str: string = 'hello world'

str = 'shit!'
console.log('str', str)
