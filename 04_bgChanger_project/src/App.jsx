import { useState } from 'react'
import ColorPicker from './ColorPicker'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen text-center" style={{backgroundColor: color}}>
        <ColorPicker setColor={setColor} />
    </div>
    </>
  )
}

export default App
