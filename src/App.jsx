import React from "react";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import axios from "axios";
import LoadingAnim from "./components/LoadingAnim";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([
    {
      title: " ",
      overview: " ",
      poster_path: " ",
      vote_average: " ",
      id: " ",
      vote_count: " ",
    },
  ]);
  const [userInput, setUserInput] = useState('')
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const value = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated`,{
            params:{
              api_key: import.meta.env.VITE_SOME_KEY,
              language: 'en-US',
              page: 1
            }
          });
        setData(value.data.results);
        setTimeout(()=>{
          setLoading(false)
        },2000)
        
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getData();
  },[]);


  return (
    <>
      {loading ? (
        <div >
          <LoadingAnim/>
        </div>
      ) : (
        <>
          <Landing data={data} setUserInput={setUserInput} userInput={userInput}/>
          <Featured data={data}/>
          <Footer/>
        </>
      )}
      {loading ? (<div><LoadingAnim/></div>):(
        <></>
      )}
    </>
  );
};

export default App;
