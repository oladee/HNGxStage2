import React from 'react'
import fbIcon from '../assets/fa-brands_facebook-square.svg'
import instaIcon from '../assets/fa-brands_instagram.svg'
import tweetIcon from '../assets/fa-brands_twitter.svg'
import youtubeIcon from '../assets/fa-brands_youtube.svg'
const Footer = () => {
  return (
    <div className='pb-4 text-[0.8rem] md:text-[1rem]'>
      <div className='flex gap-4 justify-center mb-4'>
        <img src={fbIcon} alt="" />
        <img src={instaIcon} alt="" />
        <img src={tweetIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <div className='flex gap-4 justify-center'>
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
        
      </div>
      <div className='flex justify-center mt-2'>
      <p>© {new Date().getFullYear()} MovieBox by Oladee</p>
      </div>
    </div>
  )
}

export default Footer
