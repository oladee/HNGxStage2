import logo from "../assets/Logo.svg";
import searchIcon from "../assets/Search.svg";
import imdb from "../assets/imdb.svg";
import tomatoes from "../assets/PngItem_1381056 1.svg";
import play from "../assets/Play.svg";
import hamburger from '../assets/Menu.svg'
import { useState } from "react";
import axios from "axios";

const Landing = ({ data, setData, setErrors, setLoading}) => {

const baseUrl = 'https://api.themoviedb.org/3'

const search = async (queries) =>{
    try{
      setLoading(true)
        const res = await axios.get(`${baseUrl}/search/movie`,{
            params:{
                api_key: import.meta.env.VITE_SOME_KEY,
                query:`${queries}`,
                language: 'en-US',
                page: 1
              }
        })
        setData(res.data.results)
        setTimeout(()=>{
          setLoading(false)
        },2000)
    }
    catch (error){
      setLoading(false);
        setErrors(true)
    }
}

  let notNullImages = data.filter(item => item.poster_path != null)
  let justOne = notNullImages.filter((name, index) => index < 1);
  let src = `https://image.tmdb.org/t/p/original${justOne[0].poster_path}`;

  const [inputValue, SetInputValue] = useState('')
  
  function handleSearch(e){
    e.preventDefault()
    search(inputValue)
  }

  return (
    <div
      className="image w-full h-[70vh] bg-no-repeat bg-cover  px-4 py-4 lg:px-20"
      style={{ backgroundImage: "url(" + src + ")" }}
    >
      <nav>
        <ul className="flex items-center justify-between  text-white">
          <img src={logo} alt="logo" className="w-[33%] md:w-52 " />

          <form className="flex border-2 border-white rounded-md justify-between w-52 md:w-[50%] px-1 items-center" onSubmit={handleSearch}>
            <input
              type="text"
              name="userSearch"
              id="userSearch"
              value={inputValue}
              onChange={(event) => SetInputValue(event.target.value)}
              placeholder="What do you want to watch"
              className="bg-transparent opacity- font-normal w-3/4 placeholder-white"
            />
            <img src={searchIcon} alt="searchIcon" onClick={handleSearch}
            />
          </form>

          <div className="hidden md:flex items-center">
            <h5 className="mr-5">Sign in</h5>
            <img src={hamburger} alt="hamburger menu" />
          </div>
        </ul>
      </nav>
      <section className="text-white w-[72vw] md:w-[46vw] pt-4 md:pt-8">
        <h2 className="text-[7.53vw] font-bold md:text-[3.45rem]">
          {justOne[0].title}
        </h2>
        <div className="flex md:pt-3">
          <div className="flex ">
            <img src={imdb} alt="Imdb logo" />
            <p>{justOne[0].vote_average}/10</p>
          </div>
          <div className="flex ml-7 md:ml-20">
            <img src={tomatoes} alt="" />
            <p className="">{justOne[0].vote_count}</p>
          </div>
        </div>
        <p className="py-3 md:pt-5 text-[0.8rem] md:text-[1.2rem]">{justOne[0].overview}</p>
        <button className="flex bg-rose-700 py-2 px-3 rounded-lg md:mt-5 hover:text-rose-700 hover:bg-white ">
          <img src={play} alt="watch trailer" />
          WATCH TRAILER
        </button>
      </section>
    </div>
  );
};

export default Landing;
