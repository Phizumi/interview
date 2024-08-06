import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)
//   const prevCount = useRef()
//   const handleClick = () => {
//     // 1. store previous value
//     prevCount.current = count
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <p>latest count: {count}</p>
//       <p>previous count: {prevCount.current}</p>
//       <button onClick={handleClick}>add count</button>
//     </div>
//   )
// }

// export default App

// export default function App() {
//   // 2. get DOM
//   const inputRef = useRef(null)

//   const focus = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focus}>button</button>
//     </div>
//   )
// }

// eslint-disable-next-line react/display-name
const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childFunc: () => {
      console.log('method of child component')
    }
  }))
  return <div>child component</div>
})

export default function App() {
  // 3. get child component and its method

  const childRef = useRef(null)

  function handleClick() {
    childRef.current.childFunc()
  }

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleClick}>button</button>
    </div>
  )
}
