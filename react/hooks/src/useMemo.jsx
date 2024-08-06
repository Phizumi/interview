import { useMemo, useState } from 'react'

// eslint-disable-next-line react/prop-types
function DoSomeMath({ value }) {
  // to memorize value
  const result = useMemo(() => {
    console.log('DoSomeMath calculate')

    let sum = 0
    for (let i = 0; i < 1000000; i++) {
      sum += value * 2
    }
    return sum
  }, [value])

  return (
    <div>
      <p>input value: {value}</p>
      <p>complex calculation result: {result}</p>
    </div>
  )
}

export default function App() {
  const [inputValue, setInputValue] = useState(5)
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>count addition</button>
      <br />
      <br />
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      <DoSomeMath value={inputValue} />
    </div>
  )
}
