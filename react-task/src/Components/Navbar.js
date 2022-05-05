import React from 'react'
import '../styles/style.css'

function Navbar() {
  return (
    <div className="w-screen h-16 bg-zinc-800 flex flex-row items-center">
        <div className="flex-1 px-3 box-border flex flex-row font-bold text-4xl text-white items-center">Freq<font className="text-red-950">Req</font> </div>
    </div>
  )
}

export default Navbar