import React, { useState } from 'react'

function Comp() {
  const [curVal, setVal] = useState('')
  const [flag, setFlag] = useState(false)
 
  function Hello(props){
    return <div className='font-bold text-4xl'>{curVal}</div>
  }

  const handleOnClick = () => {
    const texUpper = curVal.toUpperCase();
    setVal(texUpper)
    setFlag(true)
  }
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col justify-center items-center'>
        <textarea value={curVal} className='w-96 h-48 box-border p-5 resize-none outline-none rounded' onChange={e => {
                setVal(e.target.value)
            }
        } onFocus={() => setFlag(false)} ></textarea>

        <button className='bg-blue-500 rounded-xl font-bold px-4 py-2 mt-5' onClick={handleOnClick}>Click Here</button>
        {
            flag && <Hello />
        }
    </div>
  )
}

export default Comp