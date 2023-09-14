import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/Logo1.svg";
import homeIcon from "../assets/Home.svg";
import movieIcon from "../assets/Movie Projector.svg";
import tvIcon from "../assets/Favorite.svg";
import upcomingIcon from "../assets/Calendar.svg";
import playmovie from '../assets/Frame 3.svg'
import LoadingAnim from '../components/LoadingAnim'


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

  let imagepath = `https://image.tmdb.org/t/p/original${details.backdrop_path}`

  let milliArr = details.release_date?.split("-")
  console.log(milliArr)

  return (
    <>
    {loading ? (<LoadingAnim/>):(
        <div className="p-2 md:flex">
        <Nav />
          <div>
          <div className=" w-full md:h-[350px] bg-no-repeat bg-cover  px-4 py-4 lg:px-20 flex items-center justify-center"
        style={{ backgroundImage: "url(" + imagepath + ")" }}>
            <img src={playmovie} alt="play icon" />
          </div>
          <div>
              <h3 data-testid='movie-title'>{details.title}</h3>
              <div>
              {/* <h3 data-testid='release-date'>{Date.UTC(milliArr[0], milliArr[1], milliArr[2])}</h3> */}
              <p data-testid= 'movie-runtime'>{details.runtime}</p>
              </div>
          </div>
          <p>{details.overview}</p>
          </div>
      </div>
    )}
    </>
    
  );
};

export default MovieDetail;

const Nav = () => {
  return (
    <>
      <nav className="p-2 md:w-[40%]">
        <img src={logo} alt="logo" />
        <div className="hidden md:block">
          <div className="flex gap-2 items-center">
            <img src={homeIcon} alt="home Icon" />
            <p>Home</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={movieIcon} alt="movie Icon" />
            <p>Movieis</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={tvIcon} alt="TV Icon" />
            <p>TV Series</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={upcomingIcon} alt="upcoming Icon" />
            <p>Upcoming</p>
          </div>
        </div>
      </nav>
    </>
  );
};
