import React from 'react'

function Navbar({title,links}) {
  return (
    <div className='w-screen h-20 bg-slate-600 flex flex-row items-center text-white font-bold'>
      <div className="flex-1 flex md:flex-[0.8_0_0%] items-center text-3xl px-4">{title}</div>
      <div className="flex-1 flex md:flex-[0.2_0_0%] flex-row items-center justify-around">
        {links.map(link => <p>{link}</p>)}
      </div>
    </div>
  )
}

export default Navbar