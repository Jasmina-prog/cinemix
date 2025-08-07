import './App.css'
import MainLayout from "./layout/MainLayout";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState, useEffect, useRef } from 'react';
import ScrollLinked from './components/Karusel';

const images = [
  { title: "Security", src: "/sec.jpg" },
  { title: "Harry Potter", src: "/harrylil.jpg" },
  { title: "The Secret Life of Bees", src: "/compose.webp" },
  { title: "Home Alone", src: "/kevin.jpg" },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};


const moviesData = [
  {
    id: 1,
    title: "Security",
    genre: "Sci-Fi",
    poster: "/sec.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology...",
    imdb: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Sci-Fi",
    poster: "/compose.webp",
    description: "A team of explorers travel through a wormhole in space...",
    imdb: 8.6,
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman sets out to dismantle the remaining criminal organizations...",
    imdb: 9.0,
  },
  {
    id: 4,
    title: "Dora",
    genre: "Sci-Fi",
    poster: "/dora.jpeg",
    description: "A computer hacker learns from mysterious rebels about the true nature...",
    imdb: 8.7,
  },
  {
    id: 5,
    title: "Home Alone",
    genre: "Drama",
    poster: "/kevin.jpg",
    description: "A former Roman General sets out to exact vengeance...",
    imdb: 8.5,
  },
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w200/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War...",
    imdb: 8.8,
  },
];
function App() {
 const movieListRef = useRef(null);

  const scrollToMovies = () => {
    movieListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [modalMovie, setModalMovie] = useState(null);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
    setRatings(savedRatings);
    setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [ratings, comments]);

  const filteredMovies = moviesData.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.genre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
       <section className="w-full h-screen bg-gradient-to-br from-[#020d28] via-[#01183c] to-[#022578] flex items-center justify-center ">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-8xl font-bold leading-tight mb-6">
          Welcome to <span className="text-yellow-300">Cinemix</span>
        </h1>
        <p className="text-lg mb-8 italic">
          Explore trending movies, watch trailers, and build your watchlist.
        </p>
        <button onClick={scrollToMovies} className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-200 transition">
          Get Started
        </button>
      </div>
    </section>

    <div className="w-full">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        infinite
        showDots={false}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {images.map((img, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden w-120 mx-1 my-20">
            <img src={img.src} alt={img.title} className="w-full h-78 object-cover" style={{backgroundPosition:"top", backgroundSize:"cover"}} />
            <div className="p-2 text-white text-center">{img.title}</div>
          </div>
        ))}
      </Carousel>
    </div>



    <div>
        <div className='bg-gradient-to-br from-[#000103] via-[#01183c] to-[#010816] '>
      <h1 className='text-5xl font-bold leading-tight mb-6 my-20 text-center text-white'>TOP RECOMMENDATIONS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20">
  {/* kartochka 1 */}
  <div className="bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img
      src="/coolkids.jpg"
      alt="Cool kids don't cry"
      className="w-full h-[400px] object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        Cool kids don’t cry
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        A touching story of courage and friendship. Discover more in this heartfelt journey.
      </p>
    </div>
  </div>

  {/* kartochka 2 */}
  <div className="bg-white dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img
      src="/harry.jpg"
      alt="Harry Potter"
      className="w-full h-[400px] object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        Harry Potter
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Enter the magical world of Hogwarts and follow Harry on his epic adventure.
      </p>
    </div>
  </div>
</div>



         <div className={`${darkMode ? "dark" : ""}`}> 
      <div className="min-h-screen text-white transition-all duration-300 p-4  p-30">
        <div className="flex justify-between items-center">
          <h1 ref={movieListRef} className="text-3xl font-bold">🎬 Movie List</h1>
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button> */}
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or genre"
          className="mt-4 p-2 border rounded w-full dark:bg-gray-800"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-100 dark:bg-gray-800 rounded shadow hover:scale-105 transition-all duration-300 p-10 text-black"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-t w-full h-64 object-cover"
              />
              <div className="p-3">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-sm opacity-70">{movie.genre}</p>
                <button
                  onClick={() => setModalMovie(movie)}
                  className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Ko‘proq ma’lumot
                </button>
              </div>
            </div>
          ))}
        </div>

        {modalMovie && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className=" shadow-lg relative animate-fade-in">
              <button
                onClick={() => setModalMovie(null)}
                className="absolute top-2 right-3 text-xl"
              >
                ❌
              </button>
              <h2 className="text-2xl font-bold mb-2">{modalMovie.title}</h2>
              <p className="mb-2">{modalMovie.description}</p>
              <p className="font-semibold">IMDB: {modalMovie.imdb}</p>
              <div className="my-2">
                <p className="font-medium">Sizning bahoyingiz:</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      className={`cursor-pointer text-xl ${
                        ratings[modalMovie.id] >= num ? "text-yellow-400" : "text-gray-400"
                      }`}
                      onClick={() =>
                        setRatings({ ...ratings, [modalMovie.id]: num })
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              <textarea
                rows="3"
                placeholder="Izoh qoldiring..."
                className="w-full mt-2 p-2 border rounded dark:bg-gray-700"
                value={comments[modalMovie.id] || ""}
                onChange={(e) =>
                  setComments({
                    ...comments,
                    [modalMovie.id]: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
        </div>
    </div>
    
    </MainLayout>
   
  )
}

export default App
