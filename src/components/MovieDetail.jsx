import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingAnim from './LoadingAnim';

const MovieDetail = () => {
    const baseUrl = 'https://api.themoviedb.org/3'
    const {id} = useParams()
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function getDetails(){
            try{
                setLoading(true)
                let response = await axios.get(`${baseUrl}/movie/${id}`,{
                    params:{
                        api_key: import.meta.env.VITE_SOME_KEY,
                        language: 'en-US'
                    }
            })
            console.log(response.data)
            setDetails(response.data)
            setTimeout(()=>{
              setLoading(false)
            },1500)
    
            }
            catch (error){
                setLoading(false)
                console.log(error)
            }
        }
        getDetails()
    },[id])

  return (
    <div>

    </div>
  )
}

export default MovieDetail
