import logo from "../assets/Logo.svg";
import searchIcon from "../assets/Search.svg";
import imdb from '../assets/imdb.svg'
import tomatoes from '../assets/PngItem_1381056 1.svg'
import play from '../assets/Play.svg'

const Landing = ({ data }) => {
  console.log(data);
  let justOne = data.filter((name, index) => index < 1);
  console.log(justOne[0].poster_path);
  let src = `https://image.tmdb.org/t/p/original${justOne[0].poster_path}`;
  return (
    <div
      className="image w-full h-[70vh] bg-no-repeat bg-cover bg-contain px-4 py-4"
      style={{ backgroundImage: "url(" + src + ")" }}
    >
      <nav>
        <ul className="flex items-center justify-between">
          <img src={logo} alt="logo" className="w-[33%] md:w-52 " />

          <div className="flex border-2 border-white rounded-md justify-between w-52 px-1 items-center">
            <input
              type="text"
              name=""
              id=""
              placeholder="What do you want to watch"
              className="bg-transparent text-white opacity- font-normal w-3/4 placeholder-white"
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>
        </ul>
      </nav>
      <section>
        <h2></h2>
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
        <p>

        </p>
        <button></button>
      </section>
    </div>
  );
};

export default Landing;
