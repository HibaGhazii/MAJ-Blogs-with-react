import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <nav className="p-3 flex flex-row items-center border-b-2 justify-between border-gray-200 basis-10/12">
        <h1 className="text-3xl font-bold text-pink-500">React Lessons</h1>
        <div className=''>
            <Link to="/" className='ml-4 no-underline p-6 hover:text-pink-500'>Home</Link>
            <Link to="/Create" className='ml-4 no-underline p-6 hover:text-pink-500'>New Blog</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
