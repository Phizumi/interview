# frequent basic concept

## event loop & task & micro task

**Event Loop** 是 js engine 处理异步操作的核心机制。在 js 中，所有的执行都是按照单线程的方式进行的，这意味着任何时刻只能执行一个任务。为了处理非阻塞操作，如定时器、I/O 操作等，js 引入了 event loop 的概念。

**basic flow of event loop**

1. **Call Stack**：js 的执行环境使用 call stack 来存储正在执行的 function
  a. 当一个新的 function 被调用时，它会被压入 call stack
  b. 当该 function 执行完毕后，它会从 call stack 中弹出。

2. **Message Queue**：当一个异步操作完成时，它会将一个事件放入 Queue 中。这些事件包含了需要执行的callback function 。

3. **Event loop**：js engine 会不断检查 call stack 是否为空。如果 call stack 为空，它会从 Task Queue 中取出一个事件，并将其中的callback function 压入 call stack 中执行。这个过程会一直重复，直到 Queue 为空或某些条件满足。

**Task和Micro task**

事件可以分为 tasks 和 Micro tasks。区别在于 event loop 中的处理时机。

- **Task**：包括 script、setTimeout、setInterval、I/O、UI rendering 等。Task是 event loop 的主要部分，*每个*Task完成后，event loop 会检查 Micro-task Queue。

- **Micro Task**：包括 Promise.then、MutationObserver、process.nextTick (Node.js) 等。Micro task 会在当前 Task 结束之后立即执行，但在下一个 Task 开始之前。这意味着 Micro task 会在同一个 event loop 周期内执行完所有待处理的 Micro task。


## scope & scope chain

**scope**
scope 就是代码中 variable 和 function 可以被访问的范围。可以理解为一片“区域”，在这个区域内，可以访问某些 variable 和 function ，在区域外，无法访问。

**常见的scope类型**
1. **全局scope**：这个scope是在整个程序中都能访问的。任何在全局scope中定义的variable或 function ，在任何地方都可以使用。
2. ** function scope**：当你在一个 function 中定义variable时，这个variable只能在这个 function 内部访问， function 外部是无法访问的。
3. **块级scope(ES6 引入)**：用 let 或 const 声明的variable有块级scope，即这些variable只能在花括号 {} 内部访问。

**scope chain**
scope chain是一种查找机制，当你在一个scope中查找一个variable时，如果在当前scope找不到，它会沿着scope chain向上查找，直到全局scope为止。


## prototype & prototype chain
#### prototype
> 每个对象都有一个内部属性 [[Prototype]]（常用 `__proto__` 来访问），这个属性指向另一个对象，这个对象就是“原型”。
1. `原型对象` 包含该`实例对象`可以继承的属性和方法。
2. 当一个对象在自身上找不到某个属性或方法时，会自动查找其原型上的属性或方法。


#### prototype chain
> 这是由对象及其原型组成的**链式结构**。 

1. js 的对象系统基于原型继承，每个对象都有其原型，这个`原型对象`也有它自己的原型，以此类推，形成一个链条。
2. 当访问对象的属性时，js 引擎会首先检查自身是否拥有这个属性；如果没有，就顺着原型链向上查找，直到找到属性或到达链的顶端（即 null，表示没有更多的原型）。


## closure
> 让函数访问到 outer function 的作用域。即使外部函数已经执行完毕，inner function 仍然可以访问外部函数中的变量和函数。

1. 是一个函数及其词法环境的组合。`词法环境` 是指函数创建时所在的作用域，包括该作用域中定义的所有变量和函数。

2. 通过函数嵌套来实现的。当一个内部函数访问到外部函数中的变量或函数时，就形成了closure。

3. 当一个函数被调用时，js会创建一个新的作用域链。该作用域链由当前函数的作用域和它所访问的外部函数的作用域组成。

