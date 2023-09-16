import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../assets/Logo1.svg";
import homeIcon from "../assets/Home.svg";
import movieIcon from "../assets/Movie Projector.svg";
import tvIcon from "../assets/Favorite.svg";
import upcomingIcon from "../assets/Calendar.svg";
import playmovie from "../assets/Frame 3.svg";
import tickets from '../assets/Two Tickets.svg'
import LoadingAnim from "../components/LoadingAnim";
import options from '../assets/List.svg'
import Footer from '../components/Footer'

const MovieDetail = () => {
  const baseUrl = "https://api.themoviedb.org/3";
  const { id } = useParams();
  const [details, setDetails] = useState({
    value: "key",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDetails(cd) {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/movie/${cd}`, {
          params: {
            api_key: import.meta.env.VITE_SOME_KEY,
            language: "en-US",
          },
        });
        console.log(response.data);
        setDetails(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getDetails(id);
  }, [id]);
  if(details.backdrop_path){
    var imagepath = `https://image.tmdb.org/t/p/original${details.backdrop_path}`;
  }else{
    imagepath = `https://image.tmdb.org/t/p/original${details.poster_path}`;
  }
  

  let milliArr = details.release_date?.split("-");
  console.log(milliArr);

  return (
    <>
      {loading ? (
        <LoadingAnim />
      ) : (<>
      <div className=" md:pr-14 md:flex">
          <Nav />
          <div className="p-2 ml-auto md:w-[85%]">
            <div
              className=" w-full md:h-[350px] bg-no-repeat bg-cover  px-4 py-4 lg:px-20 flex items-center justify-center rounded-3xl"
              style={{ backgroundImage: "url(" + imagepath + ")" }}
            >
              <img src={playmovie} alt="play icon" />
            </div>
            <div>
              <h3 data-testid="movie-title" className="text-2xl mt-3">{details.title}</h3>
              <div>
                <h5 data-testid='release-date'>{details.release_date}</h5>
                <h5 data-testid="movie-runtime">{details.runtime}</h5>
              </div>
            </div>
            <div className="lg:flex">
              <div className=" lg:w-[70%]">
              <p className="pr-8" data-testid="movie-overview">{details.overview}</p>
              <h5>Director: </h5>
              <h5>Writers: </h5>
              <h5>Stars: </h5>
              </div>
              <div>
                  <button className="flex items-center bg-rose-700 text-white p-[8px] px-16 rounded-lg mb-3">
                    <img src={tickets} alt="tickets icon" />
                    See Showtimes
                  </button>
                  <button className="flex items-center bg-rose-300 p-[9px] px-[52px] rounded-lg text-black">
                    <img src={options} alt="options icon" />
                    More watch options
                  </button>
                
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
        
      )}
    </>
  );
};

export default MovieDetail;

const Nav = () => {
  return (
    <>
      <nav className=" md:border-r-2 mr-10 md:rounded-tr-3xl">
        <img src={logo} alt="logo" className="py-2 md:py-8 px-4"/>
        <div className=" hidden md:block">
          <NavLink to='/' className="focus:border-r-rose-700 focus:border-r-2 flex gap-2 items-center pl-8 py-6 focus:bg-rose-200 focus:text-rose-700 hover:bg-rose-200 hover:text-rose-700">
            <img src={homeIcon} alt="home Icon" />
            <p>Home</p>
          </NavLink>
          <NavLink active role="link" aria-activedescendant="true" className="flex gap-2 items-center pl-8 py-6 focus:bg-rose-200 focus:text-rose-700 focus:border-r-rose-700 focus:border-r-2 hover:bg-rose-200 hover:text-rose-700">
            <img src={movieIcon} alt="movie Icon" />
            <p>Movies</p>
          </NavLink>
          <NavLink className="focus:border-r-2 flex gap-2 items-center pl-8 py-6 focus:bg-rose-200 focus:text-rose-700 focus:border-r-rose-700 hover:bg-rose-200 hover:text-rose-700">
            <img src={tvIcon} alt="TV Icon" />
            <p>TV Series</p>
          </NavLink>
          <NavLink className="focus:border-r-2 flex gap-2 items-center pl-8 py-6 focus:bg-rose-200 focus:text-rose-700 focus:border-r-rose-700 hover:bg-rose-200 hover:text-rose-700">
            <img src={upcomingIcon} alt="upcoming Icon" />
            <p>Upcoming</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
