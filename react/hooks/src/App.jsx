import { memo, useCallback } from 'react'
import { useState } from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
const Btn = memo(({ onClick }) => {
  console.log('Button render')
  return <button onClick={onClick}>Click ChildComp</button>
})

export default function App() {
  const [count, setCount] = useState(0)

  // to memorize function
  const handleClick = useCallback(() => {
    console.log('click button')
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <Btn onClick={handleClick} />
    </div>
  )
}
