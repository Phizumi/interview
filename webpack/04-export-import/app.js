// 可以作为散落模块的集中导出

// export { foo, bar } from './module.js'
//
// console.log(foo, bar)


// import { Button } from "./components/Button.js";
// import { Avatar } from "./components/Avatar.js";

import { Button, Avatar } from "./components/index.js";

console.log(Button)
console.log(Avatar)