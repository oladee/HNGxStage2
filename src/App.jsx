import React from 'react';
import {useState, useEffect} from 'react'
import Landing from './components/Landing';
import Featured from './components/Featured';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([
    {
      title: ' ',
      overview: ' ',
      poster_path: ' ',
      vote_average: ' ',
      id: ' ',
      vote_count: ' '
    }
  ])

  useEffect(() => {
    async function getData(){
      try {
        const value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_SOME_KEY}`)
        setData(value.data.results)
        console.log(value.data.results)

      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <Landing data = {data}/>
      <Featured/>
      
    </div>
  )
}

export default App

