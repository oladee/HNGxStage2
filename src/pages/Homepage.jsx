import React from "react";
import { useState, useEffect } from "react";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import axios from "axios";
import LoadingAnim from "../components/LoadingAnim";
import Footer from "../components/Footer";
import Noffound from '../pages/Noffound'

const Homepage = () => {
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

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const value = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated`,
          {
            params: {
              api_key: import.meta.env.VITE_SOME_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );
        setData(value.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setErrors(true)
      }
    }
    getData();
  }, []);

  return (
    <>
      {errors ? (<Noffound/>):loading ? (
        <div>
          <LoadingAnim />
        </div>
      ) : (
        <>
          <Landing data={data} setLoading={setLoading} setData={setData} setErrors={setErrors} />
          <Featured data={data} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Homepage;
