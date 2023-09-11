const Landing = ({data}) => {
    console.log(data)
    let justOne = data.filter((name, index) => index < 1)
    console.log(justOne[0].poster_path)
    let src = `https://image.tmdb.org/t/p/original${justOne[0].poster_path}`
  return (
    
    <div className='landingDisplay'>
      <img src={src} alt="" />
    </div>
  )
}

export default Landing
