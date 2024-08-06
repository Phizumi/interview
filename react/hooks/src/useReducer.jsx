import { useReducer, useState } from 'react'
// import './App.css'

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function App() {
  // counter
  // const [count, setCount] = useState(0)
  // const handleIncrement = () => setCount(count + 1)
  // const handleDecrement = () => setCount(count - 1)

  const [state, dispatch] = useReducer(countReducer, 0)
  const handleIncrement = () => dispatch({ type: 'increment' })
  const handleDecrement = () => dispatch({ type: 'decrement' })

  return (
    <div style={{ padding: 10 }}>
      <button onClick={handleDecrement}>minus</button>
      <span>{state}</span>
      <button onClick={handleIncrement}>plus</button>
    </div>
  )
}

export default App
