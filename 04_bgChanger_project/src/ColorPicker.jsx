function ColorPicker({setColor}) {
  return (
    <div className='fixed flex flex-wrap justify-evenly bottom-12 left-0 right-0 border border-white/20 bg-white/50 mx-100 rounded-2xl'>
      <button className='w-10 h-10 m-2 rounded-full bg-red-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("red")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-blue-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("blue")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-green-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("green")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-yellow-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("yellow")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-purple-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("purple")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-pink-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("pink")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-indigo-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("indigo")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-olive-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("olive")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-black cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("black")}/>
      <button className='w-10 h-10 m-2 rounded-full bg-orange-500 cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setColor("orange")}/>
    </div>
  )
}

export default ColorPicker