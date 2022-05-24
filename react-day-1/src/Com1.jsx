import React, { useState } from 'react'

function Com1() {
  const [curLength, setLength] = useState([]);
  const [curStr, setStr] = useState("");
  const [navStr, setNav] = useState("");
  const handleOnChange = (e) => {
      const str = e.target.value
      if(str === ''){
        setLength([])
      }else{
        setLength(str.split(" "))
      }
      setStr(str)
      setNav(str.replace(/Chitkara/i, "Panjab"))
  }
  return (
    <div className='w-screen bg-red-400 h-screen flex flex-col justify-center items-center'>
        <textarea value={navStr} className='w-96 h-48 rounded-xl resize-none box-border p-5 font-bold text-xl' onChange={handleOnChange}></textarea>
        <p className='font-bold text-2xl mt-5'>No. of Words: {curLength.length}</p>
        <p className='font-bold text-2xl mt-5'>No. of Chars: {curStr.length}</p>
    </div>
  )
}

export default Com1