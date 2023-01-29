import React from 'react';
import { Link } from 'react-router-dom';
const RightNav = ({ open }) => {
  return (
    <>
<div className=' p-3'>
      <Link to="/" className='text-decoration-none text-black m-4'>Home</Link>
      <Link to=" " className='text-decoration-none text-black m-4'>Dummy </Link>
      <Link to=' ' className='text-decoration-none text-black m-4'>Dummy </Link>
      <Link to=' ' className='text-decoration-none text-black m-4'> Dummy</Link>
       </div>
      </>
     
  )
}

export default RightNav
