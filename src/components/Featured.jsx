import React from 'react'
import arrow from '../assets/Chevron right.svg'
import Card from './Card'

const Featured = ({data}) => {
  let filteredData = data.filter((item, index) => index > 0 && index < 11)
  const carddetails = filteredData.map(items => {
    return <Card key={items.id} poster={items.poster_path} title={items.title}/>
  })

  return (
    <div className='px-4 py-4 lg:px-20'>
      <div className='flex justify-between items-center '>
        <h3 className='text-[1.25rem] font-bold'>Featured Movie</h3>
        <p className='flex text-rose-700'>See more <img src={arrow} alt="arrow icon" /></p>
      </div>
      <div className='card-list'>
        {carddetails}
      </div>
    </div>
  )
}

export default Featured
