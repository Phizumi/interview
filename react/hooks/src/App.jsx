import {useEffect, useState} from "react";


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

export default function App() {
  console.log('render')
  const [count, setCount] = useState(0)

  // deps: [] means run once
  // deps: [count] means run when count changes
  // deps: ignore means run every time
  useEffect(() => {
    const start = async () => {
      const data = await fetchData();
      console.log(data);
    }
    start();

    return () => {
      // clean effect like componentWillUnmount
      // e.g. unsubscribe event listener
      // e.g. clearInterval
      console.log('clean up')
    }
  }, [])


  return (
    <div>
      <h3>useEffect</h3>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
    </div>
  )
}
