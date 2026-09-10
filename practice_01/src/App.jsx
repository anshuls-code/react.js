// import React from 'react'
// import { useState } from 'react'

// function App() {

//   const [counter, setCounter] = useState(10)
//   // console.log(counter)

//   // increasing the counter by 1
//   const addValue = () => {
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//   };

//   // this will increase the counter by 4
//   const addValueByFour = () => {
//     setCounter(prevCounter => prevCounter + 1);
//     setCounter(prevCounter => prevCounter + 1);
//     setCounter(prevCounter => prevCounter + 1);
//   }

//   // part-2
//   const [count, setCount] = useState(10);

//   const addVal = () => {
//     if (count < 20) setCount(count + 1)
//     else return (
//       <div className='text-red-500'>You reached twenty!</div>
//     )
//   }

//   const removeVal = () => {
//     if(count > 0) setCount(count - 1)
//     else return (
//       <div className='text-red-500'>You reached zero!</div>
//     )
//   }

//   return (
//     <>
//     <div className="m-10">The current value of counter is: {counter}</div>
//     <button onClick={addValue} className='bg-green-400 text-white'>Add by 1</button>
//     <button onClick={addValueByFour} className='bg-green-600 text-white'>Add by 4</button>

//     <div className="m-10">The value of count is: {count}</div>
//     <button onClick={addVal} className='bg-green-600 text-white'>Add</button>
//     <button onClick={removeVal} className='bg-red-600 text-white'>Remove</button>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';

// Child Component receiving 'count' via Props
function Display({ count }) {
  return <div className="text-xl font-bold my-4">The value of count is: {count}</div>;
}

function App() {
  const [count, setCount] = useState(10);

  const addVal = () => {
    if (count < 20) setCount(count + 1);
  };

  const removeVal = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="p-8">
      <Display count={count} />

      <div className="flex gap-4 my-4">
        <button onClick={addVal} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
        <button onClick={removeVal} className="bg-red-600 text-white px-4 py-2 rounded">
          Remove
        </button>
      </div>

      {/* Conditional Rendering for UI Feedback */}
      {count === 20 && <div className="text-red-500 font-semibold">Upper limit (20) reached!</div>}
      {count === 0 && <div className="text-red-500 font-semibold">Lower limit (0) reached!</div>}
    </div>
  );
}

export default App;