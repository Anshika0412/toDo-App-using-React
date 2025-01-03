import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='bg-teal-400 flex px-10 justify-between  py-5 '>
        <div className='flex gap-8 justify-center items-center' >
            <h3 className='bg-slate-500 rounded-tr-2xl rounded-bl-2xl font-bold text-blue-900 px-10 py-2'>Task Me</h3>
            <h5 className='text-xl font-medium  text-white pt-3'>{new Date().toDateString()}</h5>
        </div>
        
        <nav>
            <ul className='flex gap-10 pt-2'>
                <li className='font-bold cursor-pointer text-blue-900'>Home</li>
                <li className='font-bold cursor-pointer text-blue-900'>About</li>
                <li className='font-bold cursor-pointer text-blue-900'>Contact</li>
            </ul>
        </nav>
    </div>
    
    </>
  )
}
