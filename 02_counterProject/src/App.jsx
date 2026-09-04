import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 10) setCounter(counter + 1)
  }
  
  const removeValue = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>React JS with Anshul Sharma</h1>
      <h2>Counter Project</h2>
      <button onClick={addValue}>+Add</button>
      <button onClick={removeValue}>-Remove</button>
      <div>Counter value: {counter}</div>
    </>
  )
}

export default App
