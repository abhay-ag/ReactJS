import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'

function Webcard({logo, title, link}) {
  return (
    <a href={`https://www.${link}.com`} target="_blank" style = {{textDecoration: "none"}}>
      <div className="flex flex-col md:flex-row items-center box-border w-full md:w-fit h-48 md:h-fit font-bold text-black px-5 py-2 rounded-lg bg-gray-200 hover:bg-blue-200 transition ease-out my-5 md:my-5 mx-0 md:mx-5">
          <div className="flex flex-1 mt-5 md:mt-0 items-center" style={{transform: "scale(2)"}}>
              {logo}
          </div>
          <div className="text-4xl flex-1 mt-5 md:mt-0 ml-0 md:ml-5">{title}</div>
      </div>
    </a>
  )
}

export default Webcard