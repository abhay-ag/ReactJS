import React, { useState } from 'react'

function Comp() {
  const [curVal, setVal] = useState('Enter')
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col justify-center items-center'>
        <textarea value={curVal} className='w-96 h-48 box-border p-5 resize-none outline-none rounded' onChange={e => setVal(e.target.value)}></textarea>
        {
            <div className="font-bold text-4xl">{curVal}</div>
        }
    </div>
  )
}

export default Comp