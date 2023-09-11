import logo from "../assets/Logo.svg";
import searchIcon from "../assets/Search.svg";
import imdb from "../assets/imdb.svg";
import tomatoes from "../assets/PngItem_1381056 1.svg";
import play from "../assets/Play.svg";
import hamburger from '../assets/Menu.svg'

const Landing = ({ data }) => {
  let justOne = data.filter((name, index) => index < 1);
  console.log(justOne);
  let src = `https://image.tmdb.org/t/p/original${justOne[0].poster_path}`;
  return (
    <div
      className="image w-full h-[70vh] bg-no-repeat bg-cover  px-4 py-4 lg:px-20"
      style={{ backgroundImage: "url(" + src + ")" }}
    >
      <nav>
        <ul className="flex items-center justify-between  text-white">
          <img src={logo} alt="logo" className="w-[33%] md:w-52 " />

          <div className="flex border-2 border-white rounded-md justify-between w-52 md:w-[50%] px-1 items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="What do you want to watch"
              className="bg-transparent opacity- font-normal w-3/4 placeholder-white"
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>

          <div className="hidden md:flex items-center">
            <h5 className="mr-5">Sign in</h5>
            <img src={hamburger} alt="hamburger menu" />
          </div>
        </ul>
      </nav>
      <section className="text-white w-[72%] md:w-[46%] pt-4 md:pt-8">
        <h2 className="text-[2.53rem] font-bold md:text-[3.45rem]">
          {justOne[0].title}
        </h2>
        <div className="flex md:pt-3">
          <div className="flex ">
            <img src={imdb} alt="Imdb logo" />
            <p>{justOne[0].vote_average}/10</p>
          </div>
          <div className="flex ml-7 md:ml-20">
            <img src={tomatoes} alt="" />
            <p>{justOne[0].vote_count}</p>
          </div>
        </div>
        <p className="py-3 md:pt-5">{justOne[0].overview}</p>
        <button className="flex bg-rose-700 py-2 px-3 rounded-lg md:mt-5">
          <img src={play} alt="" />
          WATCH TRAILER
        </button>
      </section>
    </div>
  );
};

export default Landing;
