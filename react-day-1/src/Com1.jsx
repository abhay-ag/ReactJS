import React, { useState } from 'react'

function Com1() {
  const [curLength, setLength] = useState(0);
  const [flag, setFlag] = useState(false)
  const handleCLick = () => {
      setFlag(true)
  }
  const handleOnChange = (e) => {
      const str = (e.target.value).split(" ")
      setFlag(false)
      setLength(str.length)
  }
  return (
    <div className='w-screen bg-red-400 h-screen flex flex-col justify-center items-center'>
        <textarea className='w-96 h-48 rounded-xl resize-none box-border p-5 font-bold text-xl' onChange={handleOnChange}></textarea>
        <button className='bg-blue-500 box-border mt-5 px-4 py-2 rounded font-bold text-white text-xl' onClick={handleCLick}>Display</button>
        {flag && <p className='font-bold text-2xl'>No. of Words: {curLength}</p>}
    </div>
  )
}

export default Com1