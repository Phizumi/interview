# vite dependence preload
```js
import _ from 'lodash'
```
遇到非绝对路径或相对路径的导入，会尝试开启路径补全

```js
import _ from '/node_modules/.vite/deps/lodash'
```
依赖查找是自当前目录依次向上查找的过程，直到搜寻到根目录或对应的依赖目录为止

commonjs 导出规范 module.exports = {}, e.g axios

**dependence prebuild**
> 找到对应的依赖，调用 esbuild 将其他规范代码转换成 esm 规范，然后放到当前目录下的 node_modules/.vite/deps
> 同时对 esm 规范的各个模块进行统一集成


```js
// a.js
export default function a() {}
```

```js
// index.js
export { default as a } from './a.js'

// equal
import a from './a.js'
export { a }
```

vite 重写后
```js
// index.js
function a() {}
```


解决了3个问题：
1. 依赖的导出规范不一致
2. 依赖的路径不一致，直接使用 .vite/deps，方便路径重写
3. 网络多包传输的性能问题（esm不敢支持node_modules的原因之一）
通过依赖预构建，vite 尽可能将对应的依赖集成打包生成一个或几个模块
