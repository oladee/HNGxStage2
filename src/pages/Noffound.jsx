import React from 'react';
import errorImg from '../assets/5203299.jpg'

const Noffound = () => {

  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='text-center'>
      <img src={errorImg} alt="errorImg" className='w-60 object-cover' />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  )
}

export default Noffound
