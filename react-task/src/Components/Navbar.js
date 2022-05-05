import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

function Navbar() {
  return (
    <div className="w-screen h-24 bg-zinc-800 flex flex-row items-center sticky top-0 z-50">
        <div className="flex-1 px-3 box-border flex flex-row font-bold text-6xl text-white items-center"><Link to="/" style={{textDecoration: "none", color: "inherit"}}>Freq<font className="text-red-950">Req</font> </Link> </div>
    </div>
  )
}

export default Navbar