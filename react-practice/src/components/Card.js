import React from 'react'

function Card() {
  return (
      <div className="flex flex-col md:flex-row items-center box-border m-auto mt-5 px-4 py-2 w-fit h-fit rounded-xl bg-white">
          <img src="/logo512.png" className='w-40 md:w-20 md:h-20 box-border mx-4' alt="react-logo" />
          <p className="flex-1 flex items-center text-2xl text-black font-bold">
            This is a react card component
          </p>
      </div>
  )
}

export default Card