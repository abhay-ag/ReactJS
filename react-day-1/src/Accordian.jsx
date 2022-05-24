import React, { useState } from 'react'

function Accordian() {
  const target = document.querySelectorAll('.target')
  return (
    <div className='w-screen h-screen flex bg-blue-500 flex-col justify-center items-center'>
        <div className='w-3/4  target h-12 rounded bg-white font-bold m-5 box-border text-2xl px-5 flex items-center justify-between'>section</div>
        <div className='w-3/4 target h-12 rounded bg-white font-bold m-5 box-border text-2xl px-5 flex items-center justify-between'>section</div>
        <div className='w-3/4 target h-12 rounded bg-white font-bold m-5 box-border text-2xl px-5 flex items-center justify-between'>section</div>
        <button className='bg-blue-400 rounded-xl text-xl font-bold box-border px-4 py-2' onClick={handleOnClick}>Button</button>
    </div>
  )
}

export default Accordian