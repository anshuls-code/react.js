import { useCallback, useEffect, useRef, useState } from "react"
function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]~";

    for (let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword (pass);

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null);

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-gray-100 text-gray-800 rounded-2xl"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-2xl mx-2">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={4}
          max={20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={numAllowed}
          id="number-input"
          className="cursor-pointer"
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="character-input"
          className="cursor-pointer"
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label>Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
