import React from "react";
import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import axios from "axios";
import LoadingAnim from "./components/LoadingAnim";

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
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_SOME_KEY
          }`
        );
        setData(value.data.results);
        setLoading(false)
        console.log(value.data.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div >
          <LoadingAnim/>
        </div>
      ) : (
        <>
          <Landing data={data} setUserInput={setUserInput} userInput={userInput}/>
          <Featured />
        </>
      )}
    </>
  );
};

export default App;
