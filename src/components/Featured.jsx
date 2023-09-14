import React from 'react'
import arrow from '../assets/Chevron right.svg'
import Card from './Card'

const Featured = ({data}) => {
  let notNullImages = data.filter(item => item.poster_path != null)
  let filteredData = notNullImages.filter((item, index) => index > 0 && index < 11)
  const carddetails = filteredData.map(items => {
    return <Card key={items.id} poster={items.poster_path} title={items.title} releaseDate={items.release_date}/>
  })

  return (
    <div className='px-4 py-8 lg:px-20'>
      <div className='flex justify-between items-center py-2 '>
        <h3 className='text-[1.25rem] font-bold'>Featured Movie</h3>
        <p className='flex text-rose-700'>See more <img src={arrow} alt="arrow icon" /></p>
      </div>
      <div className='card-list flex py-[15px] flex-nowrap gap-[15px] overflow-x-auto md:w-[100%] md:grid md:place-content-center md:grid-cols-[repeat(4,auto)]'>
        {carddetails}
      </div>
    </div>
  )
}

export default Featured
