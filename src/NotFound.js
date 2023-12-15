import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NotFound = () => {
  return (
    <div className='m-5 text-center'>
      <h2 className='font-bold text-2xl'>Sorry !!!!</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to homepage...</Link>
    </div>
  )
}

export default NotFound;
